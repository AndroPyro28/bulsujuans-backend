import { Request, Response } from "express";
import AccessService from "./services";
import { success } from "zod";
import { CustomError } from "../../lib/utils";
import { StatusCodes } from "http-status-codes";
// import { TStoreAccessSchema, TUpdateAccessSchema } from "./schema";

class AccessController {
  private accessService: AccessService = new AccessService();
  constructor() {}

  list = async (req: Request, res: Response) => {
    try {
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 10;
      const search = (req.query.search as string) || "";
      const offset = (page - 1) * limit;
      const role_id = (req.query.role_id as string) || undefined;

      const data = await this.accessService.getAccesss(search, limit, offset, role_id);
      const total = await this.accessService.getAccesssTotal(search, role_id);

      return res.status(StatusCodes.OK).json({
        data: data,
        success: true,
        message: "Get Accesss",
        pagination: {
          total,
          page,
          limit,
          totalPages: Math.ceil(total / limit),
        },
      });
    } catch (error) {
      throw new CustomError(StatusCodes.INTERNAL_SERVER_ERROR, "Server Error. Failed to fetch accesss");
    }
  };

  // show = async (req: Request, res: Response) => {
  //   try {
  //     const { id }: { id?: string } = req.params;
  //     const data = await this.accessService.getAccessById(id);

  //     if (!data) {
  //       throw new CustomError(StatusCodes.BAD_REQUEST, "Access id doesn't exist");
  //     }

  //     return res.status(StatusCodes.OK).json({
  //       data,
  //       success: true,
  //       message: "Get Access Detail",
  //     });
  //   } catch (error) {
  //     throw new CustomError(StatusCodes.INTERNAL_SERVER_ERROR, "Server Error. Failed to fetch access");
  //   }
  // };

  // store = async (req: Request, res: Response) => {
  //   const body = req.body as TStoreAccessSchema;
  //   try {
  //     const access = await this.accessService.getAccessByName(body.name);

  //     if (access) {
  //       throw new CustomError(StatusCodes.BAD_REQUEST, "Access already exist");
  //     }

  //     const data = await this.accessService.createAccess(body);

  //     if (!data) {
  //       throw new CustomError(StatusCodes.BAD_REQUEST, "Failed to create access");
  //     }

  //     return res.status(StatusCodes.CREATED).json({
  //       data,
  //       success: true,
  //       message: "Access Created Successfully",
  //     });
  //   } catch (error) {
  //     throw new CustomError(StatusCodes.INTERNAL_SERVER_ERROR, "Server Error. Failed to create access");
  //   }
  // };

  // update = async (req: Request, res: Response) => {
  //   const { id }: { id?: string } = req.params;
  //   const body = req.body as TUpdateAccessSchema;
  //   try {
  //     const access = await this.accessService.getAccessById(id);

  //     if (!access) {
  //       throw new CustomError(StatusCodes.BAD_REQUEST, "Access id doesn't exist");
  //     }

  //     const data = await this.accessService.updateAccess(id, body);

  //     return res.status(StatusCodes.OK).json({
  //       data,
  //       success: true,
  //       message: "Access Updated Successfully",
  //     });
  //   } catch (error) {
  //     throw new CustomError(StatusCodes.INTERNAL_SERVER_ERROR, "Server Error. Failed to update access");
  //   }
  // };

  // destroy = async (req: Request, res: Response) => {
  //   try {
  //     const { id }: { id?: string } = req.params;

  //     const access = await this.accessService.getAccessById(id);

  //     if (!access) {
  //       throw new CustomError(StatusCodes.BAD_REQUEST, "Access id doesn't exist");
  //     }

  //     const data = await this.accessService.deleteAccess(id);

  //     return res.status(StatusCodes.OK).json({
  //       data,
  //       success: true,
  //       message: "Access Deleted Successfully",
  //     });
  //   } catch (error) {
  //     throw new CustomError(StatusCodes.INTERNAL_SERVER_ERROR, "Server Error. Failed to delete access");
  //   }
  // };
}

export default AccessController;
