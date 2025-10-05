import { Request, Response } from "express";
import UserService from "./services";
import { io } from "../../server";

class UserController {
  private userService: UserService = new UserService();
  constructor() {}

  create = async (req: Request, res: Response) => {
    try {
      const response = await this.userService.create("hello world");
      io.emit("hey", 1);
      return res.status(201).json(response);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "something went wrong..." });
    }
  };
}

export default UserController;
