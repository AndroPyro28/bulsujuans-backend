import { Request, Response } from "express";
import EducationService from "./services";
import { CustomError } from "../../lib/utils";
import { StatusCodes } from "http-status-codes";
import { TStoreEducationSchema, TUpdateEducationSchema } from "./schema";
import { Education } from "@prisma/client";
import { parseEnumParam } from "../../lib/prisma";

class EducationController {
  private educationService: EducationService = new EducationService();
  constructor() {}

  options = async (req: Request, res: Response) => {
    try {
      const data = await this.educationService.getEducationOptions();

      const formattedData = data.map((education) => ({
        label: education.degree,
        value: education.id,
      }));

      return res.status(StatusCodes.OK).json({
        data: formattedData,
        success: true,
        message: "Get Education Options",
      });
    } catch (error) {
      throw new CustomError(StatusCodes.INTERNAL_SERVER_ERROR, "Server Error. Failed to fetch education options");
    }
  };

  list = async (req: Request, res: Response) => {
    try {
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 10;
      const search = (req.query.search as string) || "";
      const offset = (page - 1) * limit;
      const user_id = (req.query.user_id as string) || undefined;

      const data = await this.educationService.getEducations(search, limit, offset, user_id);
      const total = await this.educationService.getEducationsTotal(search, user_id);

      return res.status(StatusCodes.OK).json({
        data: data,
        success: true,
        message: "Get Educations",
        pagination: {
          total,
          page,
          limit,
          totalPages: Math.ceil(total / limit),
        },
      });
    } catch (error) {
      throw new CustomError(StatusCodes.INTERNAL_SERVER_ERROR, "Server Error. Failed to fetch educations");
    }
  };

  show = async (req: Request, res: Response) => {
    try {
      const { id }: { id?: string } = req.params;
      const data = await this.educationService.getEducationById(id);

      if (!data) {
        throw new CustomError(StatusCodes.BAD_REQUEST, "Education id doesn't exist");
      }

      return res.status(StatusCodes.OK).json({
        data,
        success: true,
        message: "Get Education Detail",
      });
    } catch (error) {
      throw new CustomError(StatusCodes.INTERNAL_SERVER_ERROR, "Server Error. Failed to fetch education");
    }
  };

  store = async (req: Request, res: Response) => {
    const body = req.body as TStoreEducationSchema;
    try {
      const data = await this.educationService.createEducation(body);

      if (!data) {
        throw new CustomError(StatusCodes.BAD_REQUEST, "Failed to create education");
      }

      return res.status(StatusCodes.CREATED).json({
        data,
        success: true,
        message: "Education Created Successfully",
      });
    } catch (error) {
      throw new CustomError(StatusCodes.INTERNAL_SERVER_ERROR, "Server Error. Failed to create education");
    }
  };

  update = async (req: Request, res: Response) => {
    const { id }: { id?: string } = req.params;
    const body = req.body as TUpdateEducationSchema;
    try {
      const education = await this.educationService.getEducationById(id);

      if (!education) {
        throw new CustomError(StatusCodes.BAD_REQUEST, "Education id doesn't exist");
      }

      const data = await this.educationService.updateEducation(id, body);

      return res.status(StatusCodes.OK).json({
        data,
        success: true,
        message: "Education Updated Successfully",
      });
    } catch (error) {
      throw new CustomError(StatusCodes.INTERNAL_SERVER_ERROR, "Server Error. Failed to update education");
    }
  };

  destroy = async (req: Request, res: Response) => {
    try {
      const { id }: { id?: string } = req.params;

      const education = await this.educationService.getEducationById(id);

      if (!education) {
        throw new CustomError(StatusCodes.BAD_REQUEST, "Education id doesn't exist");
      }

      const data = await this.educationService.deleteEducation(id);

      return res.status(StatusCodes.OK).json({
        data,
        success: true,
        message: "Education Deleted Successfully",
      });
    } catch (error) {
      throw new CustomError(StatusCodes.INTERNAL_SERVER_ERROR, "Server Error. Failed to delete education");
    }
  };
}

export default EducationController;
