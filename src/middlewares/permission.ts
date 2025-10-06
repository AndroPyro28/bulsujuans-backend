import { Request, Response, NextFunction } from "express";
import { JWT } from "../types";
import RoleService from "../app/roles/services";
export interface AuthRequest extends Request {
  user?: JWT;
}

export const permission = (permission: string) => {
  return async (req: AuthRequest, res: Response, next: NextFunction) => {
    if (!req.user) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    const roleService = new RoleService();
    const userAccess = await roleService.getUserAccess(req.user.email!);
    const accessCodes = userAccess.map((a) => a.code);

    if (!accessCodes.includes(permission)) {
      return res.status(401).json({ success: false, message: "Insufficient rights" });
    }
    next();
  };
};
