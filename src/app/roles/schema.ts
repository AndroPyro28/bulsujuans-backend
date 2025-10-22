import { z } from "zod";

export const storeRoleSchema = z.object({
  name: z
    .string("Name is required")
    .min(1, "Name must be at least 1 character")
    .max(50, "Name must be at most 50 characters"),
  desc: z.string().max(255, "Description must be at most 255 characters").optional(),
});
export type TStoreRoleSchema = z.infer<typeof storeRoleSchema>;

export const updateRoleSchema = storeRoleSchema.partial();
export type TUpdateRoleSchema = z.infer<typeof updateRoleSchema>;
