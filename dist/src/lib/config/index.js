"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const envSchema = zod_1.z.object({
    NODE_ENV: zod_1.z.enum(["development", "test", "production"]),
    PORT: zod_1.z.string().min(1, "PORT is required"),
    DATABASE_URL: zod_1.z.string().min(1, "DATABASE_URL is required"),
    JWT_SECRET: zod_1.z.string().min(1, "JWT_SECRET is required"),
    JWT_REFRESH_SECRET: zod_1.z.string().min(1, "JWT_REFRESH_SECRET is required"),
    NODEMAILER_GMAIL: zod_1.z.string().min(1, "NODEMAILER_GMAIL is required"),
    NODEMAILER_PASSWORD: zod_1.z.string().min(1, "NODEMAILER_PASSWORD is required"),
    CLOUDINARY_CLOUD_NAME: zod_1.z.string().min(1, "CLOUDINARY_CLOUD_NAME is required"),
    CLOUDINARY_API_KEY: zod_1.z.string().min(1, "CLOUDINARY_API_KEY is required"),
    CLOUDINARY_API_SECRET: zod_1.z.string().min(1, "CLOUDINARY_API_SECRET is required"),
});
const env = envSchema.safeParse(process.env);
if (!env.success) {
    console.error("❌ Invalid environment variables:", env.error.format());
    process.exit(1);
}
exports.default = env.data;
