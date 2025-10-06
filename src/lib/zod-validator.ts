import { Request, Response, NextFunction } from "express";
import { z, ZodTypeAny, ZodError } from "zod";

const validate =
  (schema: ZodTypeAny) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      req.body = schema.parse(req.body); 
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        const errors: any[] = []
        for (const [key, err] of Object.entries(error.flatten().fieldErrors)) errors.push({
          key, errors: err
        });
        errors.push({key: 'field', errors:error.flatten().formErrors})
        return res.status(400).json({
          success: false,
          errors: errors,
        });
      }
      next(error);
    }
  };

export default validate;