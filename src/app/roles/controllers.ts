import { Request, Response } from "express";
import RoleService from "./services";

class RoleController {
  private roleService: RoleService = new RoleService();
  constructor() {}

  list = async (req: Request, res: Response) => {
    try {
      const data = await this.roleService.getRoles();

      return res.status(200).json({
        data,
        success: true,
        message: "Get Roles",
      });
    } catch (error) {
      return res.status(400).json({ message: "something went wrong..." });
    }
  };

  show = async (req: Request, res: Response) => {
    try {
      const data = await this.roleService.getRoleDetail();

      return res.status(200).json({
        data,
        success: true,
        message: "Get Role Detail",
      });
    } catch (error) {
      return res.status(400).json({ message: "something went wrong..." });
    }
  };

  store = async (req: Request, res: Response) => {
    try {
      const data = await this.roleService.createRole();

      return res.status(201).json({
        data,
        success: true,
        message: "Role Created Successfully",
      });
    } catch (error) {
      return res.status(400).json({ message: "something went wrong..." });
    }
  };

  update = async (req: Request, res: Response) => {
    try {
      const data = await this.roleService.updateRole();

      return res.status(201).json({
        data,
        success: true,
        message: "Role Updated Successfully",
      });
    } catch (error) {
      return res.status(400).json({ message: "something went wrong..." });
    }
  };

  destroy = async (req: Request, res: Response) => {
    try {
      const data = await this.roleService.deleteRole();

      return res.status(201).json({
        data,
        success: true,
        message: "Role Deleted Successfully",
      });
    } catch (error) {
      return res.status(400).json({ message: "something went wrong..." });
    }
  };
}

export default RoleController;
