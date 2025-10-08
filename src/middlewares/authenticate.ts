import { Request, Response, NextFunction } from "express";
import { JWT } from "../types";
import { decodeJwtToken } from "../lib/jwt";
import config from "./../lib/config";

export interface AuthRequest extends Request {
  user?: JWT;
}

export const authenticate = async (req: AuthRequest, res: Response, next: NextFunction) => {
  const authHeader = req.headers["authorization"];

  if (!authHeader) {
    return res.status(401).json({ success: false, message: "Authorization header missing" });
  }

  const token = authHeader.split(" ")[1]; // Bearer <token>

  if (!token) {
    return res.status(401).json({ success: false, message: "Token missing" });
  }

  try {
    const decoded = decodeJwtToken(token, config.JWT_SECRET);
    req.user = decoded as JWT;
    next();
  } catch (error) {
    return res.status(401).json({ success: false, message: "Invalid or expired token" });
  }
};

export const refreshToken = async (req: AuthRequest, res: Response, next: NextFunction) => {
  const refreshToken = req.body.refreshToken;

  if (!refreshToken) {
    return res.status(401).json({ success: false, message: "Token missing" });
  }

  try {
    const decoded = decodeJwtToken(refreshToken, config.JWT_REFRESH_SECRET);
    req.user = decoded as JWT;
    next();
  } catch (error) {
    return res.status(401).json({ success: false, message: "Invalid or expired token" });
  }
};
