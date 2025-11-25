import { z } from "zod";

export const storeAccessSchema = z.object({
  name: z
    .string("Name is required")
    .min(1, "Name must be at least 1 character")
    .max(50, "Name must be at most 50 characters"),
  desc: z.string().max(255, "Description must be at most 255 characters").optional(),
});
export type TStoreAccessSchema = z.infer<typeof storeAccessSchema>;

export const updateAccessSchema = storeAccessSchema.partial();
export type TUpdateAccessSchema = z.infer<typeof updateAccessSchema>;
