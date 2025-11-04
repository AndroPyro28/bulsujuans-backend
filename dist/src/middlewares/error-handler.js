"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = errorHandler;
const utils_1 = require("../lib/utils");
function errorHandler(err, req, res, next) {
    // If it's our custom AppError
    if (err instanceof utils_1.CustomError) {
        console.log(err);
        return res.status(err.statusCode).json({
            status: err.statusCode,
            message: err.message,
        });
    }
    // Otherwise, handle unexpected errors
    console.error("Unexpected Error:", err);
    return res.status(500).json({
        status: "error",
        message: "Internal server error",
    });
}
