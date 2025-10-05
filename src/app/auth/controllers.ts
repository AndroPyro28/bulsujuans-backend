import { Request, Response } from "express";
import AuthService from "./services";

class AuthController {
  private authService: AuthService = new AuthService();
  constructor() {}

  register = async (req: Request, res: Response) => {
    try {
      const response = await this.authService.register(req.body);
      return res.status(201).json(response);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "something went wrong..." });
    }
  };
}

export default AuthController;
