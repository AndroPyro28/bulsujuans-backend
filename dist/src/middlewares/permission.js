"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasAnyPermission = exports.hasAllPermission = exports.hasPermission = void 0;
const services_1 = __importDefault(require("../app/roles/services"));
const getUserAccessCodes = async (email) => {
    const roleService = new services_1.default();
    const userAccess = await roleService.getUserAccess(email);
    return userAccess.map((a) => a.code);
};
const hasPermission = (permission) => {
    return async (req, res, next) => {
        if (!req.user) {
            return res.status(401).json({ success: false, message: "Unauthorized" });
        }
        const accessCodes = await getUserAccessCodes(req.user.email);
        if (!accessCodes.includes(permission)) {
            return res.status(403).json({ success: false, message: "Insufficient rights" });
        }
        next();
    };
};
exports.hasPermission = hasPermission;
const hasAllPermission = (permissions) => {
    return async (req, res, next) => {
        if (!req.user) {
            return res.status(401).json({ success: false, message: "Unauthorized" });
        }
        const accessCodes = await getUserAccessCodes(req.user.email);
        const hasAll = permissions.every((p) => accessCodes.includes(p));
        if (!hasAll) {
            return res.status(403).json({ success: false, message: "Insufficient rights" });
        }
        next();
    };
};
exports.hasAllPermission = hasAllPermission;
const hasAnyPermission = (permissions) => {
    return async (req, res, next) => {
        if (!req.user) {
            return res.status(401).json({ success: false, message: "Unauthorized" });
        }
        const accessCodes = await getUserAccessCodes(req.user.email);
        const hasAny = permissions.some((p) => accessCodes.includes(p));
        if (!hasAny) {
            return res.status(403).json({ success: false, message: "Insufficient rights" });
        }
        next();
    };
};
exports.hasAnyPermission = hasAnyPermission;
