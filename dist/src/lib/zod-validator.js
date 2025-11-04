"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const validate = (schema) => (req, res, next) => {
    try {
        req.body = schema.parse(req.body);
        next();
    }
    catch (error) {
        if (error instanceof zod_1.ZodError) {
            const errors = [];
            for (const [key, err] of Object.entries(error.flatten().fieldErrors))
                errors.push({
                    key,
                    errors: err,
                });
            errors.push({ key: "field", errors: error.flatten().formErrors });
            return res.status(400).json({
                success: false,
                errors: errors,
            });
        }
        next(error);
    }
};
exports.default = validate;
