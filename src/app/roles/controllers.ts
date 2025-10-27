import { Request, Response } from "express";
import RoleService from "./services";
import { success } from "zod";
import { CustomError } from "../../lib/utils";
import { StatusCodes } from "http-status-codes";
import { TStoreRoleSchema, TUpdateRoleSchema } from "./schema";

class RoleController {
  private roleService: RoleService = new RoleService();
  constructor() {}

  list = async (req: Request, res: Response) => {
    try {
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 10;
      const search = (req.query.search as string) || "";
      const offset = (page - 1) * limit;

      const data = await this.roleService.getRoles(search, limit, offset);
      const total = await this.roleService.getRolesTotal(search);

      return res.status(StatusCodes.OK).json({
        data: data,
        success: true,
        message: "Get Roles",
        pagination: {
          total,
          page,
          limit,
          totalPages: Math.ceil(total / limit),
        },
      });
    } catch (error) {
      throw new CustomError(StatusCodes.INTERNAL_SERVER_ERROR, "Server Error. Failed to fetch roles");
    }
  };

  show = async (req: Request, res: Response) => {
    try {
      const { id }: { id?: string } = req.params;
      const data = await this.roleService.getRoleById(id);

      if (!data) {
        throw new CustomError(StatusCodes.BAD_REQUEST, "Role id doesn't exist");
      }

      return res.status(StatusCodes.OK).json({
        data,
        success: true,
        message: "Get Role Detail",
      });
    } catch (error) {
      throw new CustomError(StatusCodes.INTERNAL_SERVER_ERROR, "Server Error. Failed to fetch role");
    }
  };

  store = async (req: Request, res: Response) => {
    const body = req.body as TStoreRoleSchema;
    try {
      const role = await this.roleService.getRoleByName(body.name);

      if (role) {
        throw new CustomError(StatusCodes.BAD_REQUEST, "Role already exist");
      }

      const data = await this.roleService.createRole(body);

      if (!data) {
        throw new CustomError(StatusCodes.BAD_REQUEST, "Failed to create role");
      }

      return res.status(StatusCodes.CREATED).json({
        data,
        success: true,
        message: "Role Created Successfully",
      });
    } catch (error) {
      throw new CustomError(StatusCodes.INTERNAL_SERVER_ERROR, "Server Error. Failed to create role");
    }
  };

  update = async (req: Request, res: Response) => {
    const { id }: { id?: string } = req.params;
    const body = req.body as TUpdateRoleSchema;
    try {
      const role = await this.roleService.getRoleById(id);

      if (!role) {
        throw new CustomError(StatusCodes.BAD_REQUEST, "Role id doesn't exist");
      }

      const data = await this.roleService.updateRole(id, body);

      return res.status(StatusCodes.OK).json({
        data,
        success: true,
        message: "Role Updated Successfully",
      });
    } catch (error) {
      throw new CustomError(StatusCodes.INTERNAL_SERVER_ERROR, "Server Error. Failed to update role");
    }
  };

  destroy = async (req: Request, res: Response) => {
    try {
      const { id }: { id?: string } = req.params;

      const role = await this.roleService.getRoleById(id);

      if (!role) {
        throw new CustomError(StatusCodes.BAD_REQUEST, "Role id doesn't exist");
      }

      const data = await this.roleService.deleteRole(id);

      return res.status(StatusCodes.OK).json({
        data,
        success: true,
        message: "Role Deleted Successfully",
      });
    } catch (error) {
      throw new CustomError(StatusCodes.INTERNAL_SERVER_ERROR, "Server Error. Failed to delete role");
    }
  };
}

export default RoleController;
