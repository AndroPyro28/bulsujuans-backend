"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = void 0;
const multer_1 = __importDefault(require("multer"));
const utils_1 = require("../utils");
const http_status_codes_1 = require("http-status-codes");
const storage = multer_1.default.memoryStorage();
const fileFilter = (req, file, cb) => {
    if (["image/png", "image/jpeg", "application/pdf"].includes(file.mimetype)) {
        cb(null, true);
    }
    else {
        cb(new utils_1.CustomError(http_status_codes_1.StatusCodes.BAD_REQUEST, "Invalid file type. Only JPEG, PNG, and PDF files are allowed. Maximum file size is 5 MB."), false);
    }
};
exports.upload = (0, multer_1.default)({
    storage,
    fileFilter,
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB max
});
