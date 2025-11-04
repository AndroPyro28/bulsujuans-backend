"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTicketSchema = exports.storeTicketSchema = void 0;
const zod_1 = require("zod");
exports.storeTicketSchema = zod_1.z.object({
    title: zod_1.z
        .string("Title is required")
        .min(1, "Title must be at least 1 character")
        .max(50, "Title must be at most 50 characters"),
    description: zod_1.z
        .string("Description is required")
        .min(1, "Description must be at least 1 character")
        .max(500, "Description must be at most 500 characters"),
    complaint_id: zod_1.z
        .string("Complainant ID is required")
        .min(1, "Complainant ID must be at least 1 character")
        .max(255, "Complainant ID must be at most 255 characters"),
});
exports.updateTicketSchema = exports.storeTicketSchema.partial();
