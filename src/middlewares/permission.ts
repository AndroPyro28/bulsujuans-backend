import { Request, Response, NextFunction } from "express";
import { JWT } from "../types";
import RoleService from "../app/roles/services";
export interface AuthRequest extends Request {
  user?: JWT;
}

const getUserAccessCodes = async (email: string) => {
  const roleService = new RoleService();
  const userAccess = await roleService.getUserAccess(email);
  return userAccess.map((a) => a.code);
};

export const hasPermission = (permission: string) => {
  return async (req: AuthRequest, res: Response, next: NextFunction) => {
    if (!req.user) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    const accessCodes = await getUserAccessCodes(req.user.email!);

    if (!accessCodes.includes(permission)) {
      return res.status(403).json({ success: false, message: "Insufficient rights" });
    }

    next();
  };
};

export const hasAllPermission = (permissions: string[]) => {
  return async (req: AuthRequest, res: Response, next: NextFunction) => {
    if (!req.user) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    const accessCodes = await getUserAccessCodes(req.user.email!);

    const hasAll = permissions.every((p) => accessCodes.includes(p));
    if (!hasAll) {
      return res.status(403).json({ success: false, message: "Insufficient rights" });
    }

    next();
  };
};

export const hasAnyPermission = (permissions: string[]) => {
  return async (req: AuthRequest, res: Response, next: NextFunction) => {
    if (!req.user) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    const accessCodes = await getUserAccessCodes(req.user.email!);

    const hasAny = permissions.some((p) => accessCodes.includes(p));
    if (!hasAny) {
      return res.status(403).json({ success: false, message: "Insufficient rights" });
    }

    next();
  };
};
