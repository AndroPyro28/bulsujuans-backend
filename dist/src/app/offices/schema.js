"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateOfficeSchema = exports.storeOfficeSchema = void 0;
const client_1 = require("@prisma/client");
const zod_1 = require("zod");
exports.storeOfficeSchema = zod_1.z.object({
    name: zod_1.z
        .string("Name is required")
        .min(1, "Name must be at least 1 character")
        .max(50, "Name must be at most 50 characters"),
    desc: zod_1.z.string().max(255, "Description must be at most 255 characters").optional(),
    type: zod_1.z.enum(client_1.OfficeType, `Type is required and must be one of: ${Object.values(client_1.OfficeType).join(", ")}`),
});
exports.updateOfficeSchema = exports.storeOfficeSchema.partial();
