"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.refreshToken = exports.authenticate = void 0;
const jwt_1 = require("../lib/jwt");
const config_1 = __importDefault(require("./../lib/config"));
const authenticate = async (req, res, next) => {
    const authHeader = req.headers["authorization"];
    if (!authHeader) {
        return res.status(401).json({ success: false, message: "Authorization header missing" });
    }
    const token = authHeader.split(" ")[1]; // Bearer <token>
    if (!token) {
        return res.status(401).json({ success: false, message: "Token missing" });
    }
    try {
        const decoded = (0, jwt_1.decodeJwtToken)(token, config_1.default.JWT_SECRET);
        req.user = decoded;
        next();
    }
    catch (error) {
        return res.status(401).json({ success: false, message: "Invalid or expired token" });
    }
};
exports.authenticate = authenticate;
const refreshToken = async (req, res, next) => {
    const refreshToken = req.body.refreshToken;
    if (!refreshToken) {
        return res.status(401).json({ success: false, message: "Token missing" });
    }
    try {
        const decoded = (0, jwt_1.decodeJwtToken)(refreshToken, config_1.default.JWT_REFRESH_SECRET);
        req.user = decoded;
        next();
    }
    catch (error) {
        return res.status(401).json({ success: false, message: "Invalid or expired token" });
    }
};
exports.refreshToken = refreshToken;
