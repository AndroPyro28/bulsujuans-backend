import config from "../../lib/config";
import AuthService from "./services";
import { Request, Response } from "express";
import { TLoginSchema } from "./schema";
import {
  compare,
  decodeJwtToken,
  generateJwtToken,
  generateOtp,
  generateUserToken,
} from "../../lib/jwt";
import fs from "fs";
import sendMail from "../../lib/smtp";
import Handlebars from "handlebars";
import { CustomError } from "../../lib/utils";
import { StatusCodes } from "http-status-codes";
import bcrypt from "bcrypt";

class AuthController {
  private authService: AuthService = new AuthService();
  constructor() {}

  login = async (req: Request, res: Response) => {
    try {
      const body = req.body as TLoginSchema;

      if (body.type === "request-otp") {
        const { email } = body;
        const user = await this.authService.findByEmail(email);

        if (!user || !user.id) {
          throw new CustomError(StatusCodes.NOT_FOUND, "User Not Found");
        }

        const otp = generateOtp();

        const jwtToken = await generateJwtToken({
          email: user?.email!,
          studentId: user.student_id,
          otp: otp,
          jwtSecret: config.JWT_SECRET,
        });

        await this.authService.updateCredentials(user.credential.student_id, {
          access_token: jwtToken,
        });

        const sourcePath = `${__dirname}/../../../public/email-templates/request-otp.html`;
        const sourceTemplate = fs.readFileSync(sourcePath, "utf-8").toString();
        const template = Handlebars.compile(sourceTemplate);
        const replacement = {
          firstName: user?.first_name,
          otp,
        };
        const requestOtpContent = template(replacement);
        sendMail({
          content: requestOtpContent,
          subject: "One Time Password",
          emailTo: user?.email as string,
        });

        return res.status(200).json({
          success: true,
        });
      }

      if (body.type === "verify-otp") {
        const { email, otp, type } = body;
        const user = await this.authService.findByEmail(email);
        if (!user || !user.id) {
          throw new CustomError(StatusCodes.NOT_FOUND, "User Not Found");
        }
        const jwt = decodeJwtToken(
          user.credential.access_token,
          config.JWT_SECRET
        );
        if (!jwt) {
          throw new CustomError(StatusCodes.BAD_REQUEST, "Token expired");
        }
        if (user.email !== jwt.email || jwt.studentId != user.student_id) {
          throw new CustomError(StatusCodes.BAD_REQUEST, "Invalid Credentials");
        }
        const isOtpMatched = await bcrypt.compare(otp, jwt.otp);
        if (!isOtpMatched) {
          throw new CustomError(
            StatusCodes.BAD_REQUEST,
            "Invalid or expired OTP. Please request a new one."
          );
        }
        const payload = {
          id: user.id,
          email: user.email,
          studentId: user.student_id,
        };
        const [accessToken, refreshToken] = await Promise.all([
          generateUserToken({
            ...payload,
            expiresIn: "15m",
            jwtSecret: config.JWT_SECRET,
          }),
          generateUserToken({
            ...payload,
            expiresIn: "1d",
            jwtSecret: config.JWT_REFRESH_SECRET,
          }),
        ]);
        await this.authService.updateCredentials(user.credential.student_id, {
          access_token: accessToken,
          refresh_token: refreshToken,
        });
        return res.status(StatusCodes.OK).json({
          tokens: {
            accessToken,
            refreshToken,
          },
          success: true,
        });
      }
    } catch (error) {
      throw error;
    }
  };

  register = async (req: Request, res: Response) => {
    try {
      // const response = await this.authService.register(req.body);
      return res.status(201).json({});
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "something went wrong..." });
    }
  };
}

export default AuthController;
