import { ComplaintType } from "@prisma/client";
import { z } from "zod";

export const storeComplaintSchema = z.object({
  name: z
    .string("Name is required")
    .min(1, "Name must be at least 1 character")
    .max(50, "Name must be at most 50 characters"),
  email: z.email("Email is required"),
  contact_number: z.string("Contact Number is required").min(1, "Contact Number is required"),
  alternate_contact_number: z.string().optional(),

  incident_detail: z
    .string("Incident Detail is required")
    .min(1, "Incident Detail must be at least 1 character")
    .max(500, "Incident Detail must be at most 500 characters"),
  date_of_incident: z.coerce.date("Date of Incident is required"),
  complaint_type: z.enum(ComplaintType, `Complaint Type must be one of: ${Object.values(ComplaintType).join(", ")}`),

  complainant_id: z
    .string("Complainant ID is required")
    .min(1, "Complainant ID must be at least 1 character")
    .max(255, "Complainant ID must be at most 255 characters"),
});
export type TStoreComplaintSchema = z.infer<typeof storeComplaintSchema>;

export const updateComplaintSchema = storeComplaintSchema.partial();
export type TUpdateComplaintSchema = z.infer<typeof updateComplaintSchema>;
