"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateUserToken = exports.decodeJwtToken = exports.generateJwtToken = exports.compare = exports.hash = exports.generateOtp = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const generateOtp = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
};
exports.generateOtp = generateOtp;
const hash = async (value) => {
    const saltRounds = 10;
    const hash = await bcrypt_1.default.hash(value, saltRounds);
    return hash;
};
exports.hash = hash;
const compare = async (rawValue, hashedValue) => {
    return await bcrypt_1.default.compare(rawValue, hashedValue);
};
exports.compare = compare;
const generateJwtToken = async ({ email, userId, otp, jwtSecret }) => {
    const saltRounds = 10;
    const salt = await bcrypt_1.default.genSalt(saltRounds);
    const hashedOtp = await bcrypt_1.default.hash(otp, salt);
    const payload = {
        email,
        userId,
        otp: hashedOtp,
    };
    return jsonwebtoken_1.default.sign(payload, jwtSecret, { expiresIn: "5m" }); // optional expiration
};
exports.generateJwtToken = generateJwtToken;
const decodeJwtToken = (token, jwtSecret) => {
    try {
        const decoded = jsonwebtoken_1.default.verify(token, jwtSecret);
        return decoded;
    }
    catch (error) {
        console.error("Invalid or expired token:", error);
        return null;
    }
};
exports.decodeJwtToken = decodeJwtToken;
const generateUserToken = async ({ userId, email, jwtSecret, expiresIn, }) => {
    const payload = {
        userId,
        email,
    };
    return jsonwebtoken_1.default.sign(payload, jwtSecret, { expiresIn }); // optional expiration
};
exports.generateUserToken = generateUserToken;
