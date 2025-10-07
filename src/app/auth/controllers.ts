import { User } from "@prisma/client";
import config from "../../lib/config";
import AuthService from "./services";
import { Request, Response } from "express";
import { TLoginSchema } from "./schema";
import { generateJwtToken, generateOtp } from "../../lib/jwt";
class AuthController {
  private authService: AuthService = new AuthService();
  constructor() {}

  login = async (req: Request, res: Response) => {
    const body = req.body as TLoginSchema;

    if (body.type === "request-otp") {
      const user = await this.authService.findByStudentId(body.studentId);

      if (!user) {
        return res.status(404).json({
          success: false,
          error: "User Not Found",
        });
      }

      const otp = generateOtp();

      const jwtToken = await generateJwtToken({
        email: user.user?.email!,
        studentId: user.student_id,
        otp: otp,
        jwtSecret: config.JWT_SECRET,
      });

      await this.authService.updateCredentials(user.student_id, { access_token: jwtToken });

      return res.status(200).json({
        success: true,
        jwtToken, // added for test purpose only
      });
      // TODO: send email with OTP
    }

    if (body.type === "verify-otp") {
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
