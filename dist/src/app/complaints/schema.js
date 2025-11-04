"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateComplaintSchema = exports.storeComplaintSchema = void 0;
const client_1 = require("@prisma/client");
const zod_1 = require("zod");
exports.storeComplaintSchema = zod_1.z.object({
    name: zod_1.z
        .string("Name is required")
        .min(1, "Name must be at least 1 character")
        .max(50, "Name must be at most 50 characters"),
    email: zod_1.z.email("Email is required"),
    contact_number: zod_1.z.string("Contact Number is required").min(1, "Contact Number is required"),
    alternate_contact_number: zod_1.z.string().optional(),
    incident_detail: zod_1.z
        .string("Incident Detail is required")
        .min(1, "Incident Detail must be at least 1 character")
        .max(500, "Incident Detail must be at most 500 characters"),
    date_of_incident: zod_1.z.coerce.date("Date of Incident is required"),
    complaint_type: zod_1.z.enum(client_1.ComplaintType, `Complaint Type must be one of: ${Object.values(client_1.ComplaintType).join(", ")}`),
    complainant_id: zod_1.z
        .string("Complainant ID is required")
        .min(1, "Complainant ID must be at least 1 character")
        .max(255, "Complainant ID must be at most 255 characters"),
});
exports.updateComplaintSchema = exports.storeComplaintSchema.partial();
