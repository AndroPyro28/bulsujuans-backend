import { z } from "zod";

export const storeAccessSchema = z.object({
  code: z
    .string("Code is required")
    .min(1, "Code must be at least 1 character")
    .max(30, "Code must be at most 20 characters"),
  name: z
    .string("Name is required")
    .min(1, "Name must be at least 1 character")
    .max(50, "Name must be at most 50 characters"),
  desc: z.string().max(255, "Description must be at most 255 characters").optional(),
});
export type TStoreAccessSchema = z.infer<typeof storeAccessSchema>;

export const updateAccessSchema = storeAccessSchema.partial();
export type TUpdateAccessSchema = z.infer<typeof updateAccessSchema>;

export const addAccessSchema = z.object({
  role_id: z.string("Role id is required"),
  access_id: z.string("Access id is required"),
});

export type TAddAccessSchema = z.infer<typeof addAccessSchema>;
