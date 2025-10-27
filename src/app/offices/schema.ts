import { OfficeType } from "@prisma/client";
import { z } from "zod";

export const storeOfficeSchema = z.object({
  name: z
    .string("Name is required")
    .min(1, "Name must be at least 1 character")
    .max(50, "Name must be at most 50 characters"),
  desc: z.string().max(255, "Description must be at most 255 characters").optional(),
  type: z.enum(OfficeType, `Type is required and must be one of: ${Object.values(OfficeType).join(", ")}`),
});
export type TStoreOfficeSchema = z.infer<typeof storeOfficeSchema>;

export const updateOfficeSchema = storeOfficeSchema.partial();
export type TUpdateOfficeSchema = z.infer<typeof updateOfficeSchema>;
