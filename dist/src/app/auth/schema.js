"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginSchema = void 0;
const zod_1 = require("zod");
exports.loginSchema = zod_1.z.discriminatedUnion("type", [
    zod_1.z
        .object({
        type: zod_1.z.literal("request-otp"),
        email: zod_1.z.email().min(1, "email is required"),
    })
        .strict(),
    zod_1.z
        .object({
        type: zod_1.z.literal("verify-otp"),
        email: zod_1.z.email(),
        otp: zod_1.z.string().min(6).max(6, "OTP must be 6 digits"), // adjust as needed
    })
        .strict(),
]);
