import { Request, Response } from "express";
import AuthService from "./services";
import { TLoginSchema } from "./schema";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import config from "../../lib/config";
class AuthController {
  private authService: AuthService = new AuthService();
  constructor() {}

  login = async (req: Request, res: Response) => {
    const body = req.body as TLoginSchema

    if(body.type === 'request-otp') {
      const user = await this.authService.findByStudentId(body.studentId)

      if(!user || !user.id) {
        return res.status(404).json({
          success: false,
          error: "User Not Found"
        })
      }

      const otp = Math.floor(100000 + Math.random() * 900000).toString();
      const saltRounds = 10
      const salt = await bcrypt.genSalt(saltRounds)
      const payload = {
        email: user.User?.email,
        studentId: user.student_id,
        otp: await bcrypt.hash(otp, salt),
      }
      const jwtToken = await jwt.sign(payload, config.JWT_SECRET)
      await this.authService.updateCredentials(user.student_id, {access_token: jwtToken})
      
      // TODO: send email with OTP
    }

    if(body.type === 'verify-otp') {
      
    }
  }

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
