import { TicketStatusEnum } from "@prisma/client";
import { z } from "zod";

export const storeTicketSchema = z.object({
  title: z
    .string("Title is required")
    .min(1, "Title must be at least 1 character")
    .max(50, "Title must be at most 50 characters"),
  description: z
    .string("Description is required")
    .min(1, "Description must be at least 1 character")
    .max(500, "Description must be at most 500 characters"),
  complaint_id: z
    .string("Complainant ID is required")
    .min(1, "Complainant ID must be at least 1 character")
    .max(255, "Complainant ID must be at most 255 characters"),
  status: z
    .enum(TicketStatusEnum, `Ticket status must be one of: ${Object.values(TicketStatusEnum).join(", ")}`)
    .optional(),
});

export type TStoreTicketSchema = z.infer<typeof storeTicketSchema>;

export const updateTicketSchema = storeTicketSchema.partial();
export type TUpdateTicketSchema = z.infer<typeof updateTicketSchema>;
