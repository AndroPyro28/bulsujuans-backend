"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateRoleSchema = exports.storeRoleSchema = void 0;
const zod_1 = require("zod");
exports.storeRoleSchema = zod_1.z.object({
    name: zod_1.z
        .string("Name is required")
        .min(1, "Name must be at least 1 character")
        .max(50, "Name must be at most 50 characters"),
    desc: zod_1.z.string().max(255, "Description must be at most 255 characters").optional(),
});
exports.updateRoleSchema = exports.storeRoleSchema.partial();
