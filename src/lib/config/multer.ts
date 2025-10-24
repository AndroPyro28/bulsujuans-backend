import multer from "multer";
import { CustomError } from "../utils";
import { StatusCodes } from "http-status-codes";

const storage = multer.memoryStorage();

const fileFilter = (req: any, file: Express.Multer.File, cb: any) => {
  if (["image/png", "image/jpeg", "application/pdf"].includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(
      new CustomError(
        StatusCodes.BAD_REQUEST,
        "Invalid file type. Only JPEG, PNG, and PDF files are allowed. Maximum file size is 5 MB."
      ),
      false
    );
  }
};

export const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB max
});
