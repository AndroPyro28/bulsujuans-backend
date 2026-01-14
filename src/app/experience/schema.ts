import { z } from "zod";

export const storeExperienceSchema = z.object({
  title: z.string().min(1, "Title is required").max(100, "Title must be at most 100 characters"),
  company: z.string().min(1, "Company is required").max(100, "Company must be at most 100 characters"),
  description: z
    .string()
    .max(65535, "Description must be at most 65535 characters") // match Text type
    .optional(),
  start_year: z
    .number()
    .int("Start year must be an integer")
    .min(1900, "Start year seems invalid")
    .max(new Date().getFullYear(), "Start year cannot be in the future"),
  end_year: z
    .number()
    .int("End year must be an integer")
    .min(1900, "End year seems invalid")
    .max(new Date().getFullYear() + 10, "End year seems invalid")
    .optional()
    .nullable(),
  is_current: z.boolean().optional(),
  userId: z.string().min(1, "User ID is required"),
});

export type TStoreExperienceSchema = z.infer<typeof storeExperienceSchema>;

export const updateExperienceSchema = storeExperienceSchema.partial();
export type TUpdateExperienceSchema = z.infer<typeof updateExperienceSchema>;
