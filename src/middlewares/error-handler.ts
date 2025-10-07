import { Request, Response, NextFunction } from "express"
import {CustomError} from "../lib/utils"

export default function errorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  // If it's our custom AppError
  if (err instanceof CustomError) {
    console.log(err)
    return res.status(err.statusCode).json({
      status: err.statusCode,
      message: err.message,
    })
  }

  // Otherwise, handle unexpected errors
  console.error("Unexpected Error:", err)
  return res.status(500).json({
    status: "error",
    message: "Internal server error",
  })
}
