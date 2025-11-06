import { NewsCategory } from "@prisma/client";
import { z } from "zod";

export const storeNewsSchema = z.object({
  title: z
    .string("Title is required")
    .min(1, "Title must be at least 1 character")
    .max(250, "Title must be at most 250 characters"),
  source: z
    .string("Title is required")
    .min(1, "Title must be at least 1 character")
    .max(100, "Title must be at most 100 characters"),
  content: z.string("Title is required"),
  desc: z.string().max(255, "Description must be at most 255 characters").optional(),
  category: z.enum(NewsCategory, `Type is required and must be one of: ${Object.values(NewsCategory).join(", ")}`),
  posted_by_id: z
    .string("Posted by ID is required")
    .min(1, "Posted by ID must be at least 1 character")
    .max(255, "Posted by ID must be at most 255 characters"),
});
export type TStoreNewsSchema = z.infer<typeof storeNewsSchema>;

export const updateNewsSchema = storeNewsSchema.partial();
export type TUpdateNewsSchema = z.infer<typeof updateNewsSchema>;
