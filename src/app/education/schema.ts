import { z } from "zod";

export const storeEducationSchema = z.object({
  degree: z
    .string()
    .min(1, "Degree is required")
    .max(100, "Degree must be at most 100 characters"),

  institution: z
    .string()
    .min(1, "Institution is required")
    .max(150, "Institution must be at most 150 characters"),

  description: z
    .string()
    .max(65535, "Description must be at most 65535 characters") // Text equivalent
    .optional(),

  year: z
    .number()
    .int("Year must be an integer")
    .min(1900, "Year seems invalid")
    .max(new Date().getFullYear() + 10, "Year seems invalid"),

  userId: z.string().min(1, "User ID is required"),
});

export type TStoreEducationSchema = z.infer<typeof storeEducationSchema>;

export const updateEducationSchema = storeEducationSchema.partial();
export type TUpdateEducationSchema = z.infer<typeof updateEducationSchema>;
