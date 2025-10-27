import { Request, Response } from "express";
import OfficeService from "./services";
import { CustomError } from "../../lib/utils";
import { StatusCodes } from "http-status-codes";
import { TStoreOfficeSchema, TUpdateOfficeSchema } from "./schema";
import { OfficeType } from "@prisma/client";
import { parseEnumParam } from "../../lib/prisma";

class OfficeController {
  private officeService: OfficeService = new OfficeService();
  constructor() {}

  options = async (req: Request, res: Response) => {
    try {
      const data = await this.officeService.getOfficeOptions();

      const formattedData = data.map((office) => ({
        label: office.name,
        value: office.id,
      }));

      return res.status(StatusCodes.OK).json({
        data: formattedData,
        success: true,
        message: "Get Office Options",
      });
    } catch (error) {
      throw new CustomError(StatusCodes.INTERNAL_SERVER_ERROR, "Server Error. Failed to fetch office options");
    }
  };

  list = async (req: Request, res: Response) => {
    try {
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 10;
      const search = (req.query.search as string) || "";
      const offset = (page - 1) * limit;
      const office_type = parseEnumParam(req.query.office_type, OfficeType);

      const data = await this.officeService.getOffices(search, limit, offset, office_type);
      const total = await this.officeService.getOfficesTotal(search, office_type);

      return res.status(StatusCodes.OK).json({
        data: data,
        success: true,
        message: "Get Offices",
        pagination: {
          total,
          page,
          limit,
          totalPages: Math.ceil(total / limit),
        },
      });
    } catch (error) {
      throw new CustomError(StatusCodes.INTERNAL_SERVER_ERROR, "Server Error. Failed to fetch offices");
    }
  };

  show = async (req: Request, res: Response) => {
    try {
      const { id }: { id?: string } = req.params;
      const data = await this.officeService.getOfficeById(id);

      if (!data) {
        throw new CustomError(StatusCodes.BAD_REQUEST, "Office id doesn't exist");
      }

      return res.status(StatusCodes.OK).json({
        data,
        success: true,
        message: "Get Office Detail",
      });
    } catch (error) {
      throw new CustomError(StatusCodes.INTERNAL_SERVER_ERROR, "Server Error. Failed to fetch office");
    }
  };

  store = async (req: Request, res: Response) => {
    const body = req.body as TStoreOfficeSchema;
    try {
      const office = await this.officeService.getOfficeByName(body.name);

      if (office) {
        throw new CustomError(StatusCodes.BAD_REQUEST, "Office already exist");
      }

      const data = await this.officeService.createOffice(body);

      if (!data) {
        throw new CustomError(StatusCodes.BAD_REQUEST, "Failed to create office");
      }

      return res.status(StatusCodes.CREATED).json({
        data,
        success: true,
        message: "Office Created Successfully",
      });
    } catch (error) {
      throw new CustomError(StatusCodes.INTERNAL_SERVER_ERROR, "Server Error. Failed to create office");
    }
  };

  update = async (req: Request, res: Response) => {
    const { id }: { id?: string } = req.params;
    const body = req.body as TUpdateOfficeSchema;
    try {
      const office = await this.officeService.getOfficeById(id);

      if (!office) {
        throw new CustomError(StatusCodes.BAD_REQUEST, "Office id doesn't exist");
      }

      const data = await this.officeService.updateOffice(id, body);

      return res.status(StatusCodes.OK).json({
        data,
        success: true,
        message: "Office Updated Successfully",
      });
    } catch (error) {
      throw new CustomError(StatusCodes.INTERNAL_SERVER_ERROR, "Server Error. Failed to update office");
    }
  };

  destroy = async (req: Request, res: Response) => {
    try {
      const { id }: { id?: string } = req.params;

      const office = await this.officeService.getOfficeById(id);

      if (!office) {
        throw new CustomError(StatusCodes.BAD_REQUEST, "Office id doesn't exist");
      }

      const data = await this.officeService.deleteOffice(id);

      return res.status(StatusCodes.OK).json({
        data,
        success: true,
        message: "Office Deleted Successfully",
      });
    } catch (error) {
      throw new CustomError(StatusCodes.INTERNAL_SERVER_ERROR, "Server Error. Failed to delete office");
    }
  };
}

export default OfficeController;
