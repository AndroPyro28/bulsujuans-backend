import { Request, Response } from "express";
import ExperienceService from "./services";
import { CustomError } from "../../lib/utils";
import { StatusCodes } from "http-status-codes";
import { TStoreExperienceSchema, TUpdateExperienceSchema } from "./schema";
import { Experience } from "@prisma/client";
import { parseEnumParam } from "../../lib/prisma";

class ExperienceController {
  private experienceService: ExperienceService = new ExperienceService();
  constructor() {}

  options = async (req: Request, res: Response) => {
    try {
      const data = await this.experienceService.getExperienceOptions();

      const formattedData = data.map((experience) => ({
        label: experience.title,
        value: experience.id,
      }));

      return res.status(StatusCodes.OK).json({
        data: formattedData,
        success: true,
        message: "Get Experience Options",
      });
    } catch (error) {
      throw new CustomError(StatusCodes.INTERNAL_SERVER_ERROR, "Server Error. Failed to fetch experience options");
    }
  };

  list = async (req: Request, res: Response) => {
    try {
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 10;
      const search = (req.query.search as string) || "";
      const offset = (page - 1) * limit;
      const user_id = (req.query.user_id as string) || undefined;

      const data = await this.experienceService.getExperiences(search, limit, offset, user_id);
      const total = await this.experienceService.getExperiencesTotal(search, user_id);

      return res.status(StatusCodes.OK).json({
        data: data,
        success: true,
        message: "Get Experiences",
        pagination: {
          total,
          page,
          limit,
          totalPages: Math.ceil(total / limit),
        },
      });
    } catch (error) {
      throw new CustomError(StatusCodes.INTERNAL_SERVER_ERROR, "Server Error. Failed to fetch experiences");
    }
  };

  show = async (req: Request, res: Response) => {
    try {
      const { id }: { id?: string } = req.params;
      const data = await this.experienceService.getExperienceById(id);

      if (!data) {
        throw new CustomError(StatusCodes.BAD_REQUEST, "Experience id doesn't exist");
      }

      return res.status(StatusCodes.OK).json({
        data,
        success: true,
        message: "Get Experience Detail",
      });
    } catch (error) {
      throw new CustomError(StatusCodes.INTERNAL_SERVER_ERROR, "Server Error. Failed to fetch experience");
    }
  };

  store = async (req: Request, res: Response) => {
    const body = req.body as TStoreExperienceSchema;
    try {
      const data = await this.experienceService.createExperience(body);

      if (!data) {
        throw new CustomError(StatusCodes.BAD_REQUEST, "Failed to create experience");
      }

      return res.status(StatusCodes.CREATED).json({
        data,
        success: true,
        message: "Experience Created Successfully",
      });
    } catch (error) {
      throw new CustomError(StatusCodes.INTERNAL_SERVER_ERROR, "Server Error. Failed to create experience");
    }
  };

  update = async (req: Request, res: Response) => {
    const { id }: { id?: string } = req.params;
    const body = req.body as TUpdateExperienceSchema;
    try {
      const experience = await this.experienceService.getExperienceById(id);

      if (!experience) {
        throw new CustomError(StatusCodes.BAD_REQUEST, "Experience id doesn't exist");
      }

      const data = await this.experienceService.updateExperience(id, body);

      return res.status(StatusCodes.OK).json({
        data,
        success: true,
        message: "Experience Updated Successfully",
      });
    } catch (error) {
      throw new CustomError(StatusCodes.INTERNAL_SERVER_ERROR, "Server Error. Failed to update experience");
    }
  };

  destroy = async (req: Request, res: Response) => {
    try {
      const { id }: { id?: string } = req.params;

      const experience = await this.experienceService.getExperienceById(id);

      if (!experience) {
        throw new CustomError(StatusCodes.BAD_REQUEST, "Experience id doesn't exist");
      }

      const data = await this.experienceService.deleteExperience(id);

      return res.status(StatusCodes.OK).json({
        data,
        success: true,
        message: "Experience Deleted Successfully",
      });
    } catch (error) {
      throw new CustomError(StatusCodes.INTERNAL_SERVER_ERROR, "Server Error. Failed to delete experience");
    }
  };
}

export default ExperienceController;
