import { Request, Response } from "express";
import TicketService from "./service";
import { CustomError } from "../../lib/utils";
import { StatusCodes } from "http-status-codes";
import { TStoreTicketSchema, TUpdateTicketSchema } from "./schema";
import { uploadToCloudinary } from "../../lib/config/cloudinary";
import DocumentService from "../documents/service";
import { parseEnumParam } from "../../lib/prisma";
import { TicketStatusEnum } from "@prisma/client";

class TicketController {
  private ticketService: TicketService = new TicketService();
  private documentService: DocumentService = new DocumentService();
  constructor() {}

  options = async (req: Request, res: Response) => {
    try {
      const data = await this.ticketService.getTicketOptions();

      const formattedData = data.map((office) => ({
        label: office.title,
        value: office.id,
      }));

      return res.status(StatusCodes.OK).json({
        data: formattedData,
        success: true,
        message: "Get Ticket Options",
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
      const complaint_status = parseEnumParam(req.query.office_type, TicketStatusEnum);
      const assigned_office_id = (req.query.assigned_office_id as string) || undefined;
      const complaint_id = (req.query.assigned_office_id as string) || undefined;

      const data = await this.ticketService.getTickets(
        search,
        limit,
        offset,
        complaint_status,
        assigned_office_id,
        complaint_id
      );
      const total = await this.ticketService.getTicketsTotal(
        search,
        complaint_status,
        assigned_office_id,
        complaint_id
      );

      return res.status(StatusCodes.OK).json({
        data: data,
        success: true,
        message: "Get Tickets",
        pagination: {
          total,
          page,
          limit,
          totalPages: Math.ceil(total / limit),
        },
      });
    } catch (error) {
      throw new CustomError(StatusCodes.INTERNAL_SERVER_ERROR, "Server Error. Failed to fetch tickets");
    }
  };

  show = async (req: Request, res: Response) => {
    try {
      const { id }: { id?: string } = req.params;

      const data = await this.ticketService.getTicketById(id);

      return res.status(StatusCodes.OK).json({
        data,
        success: true,
        message: "Get Ticket Detail",
      });
    } catch (error) {
      throw new CustomError(StatusCodes.INTERNAL_SERVER_ERROR, "Server Error. Failed to fetch ticket");
    }
  };

  update = async (req: Request, res: Response) => {
    const { id }: { id?: string } = req.params;
    const body = req.body as TUpdateTicketSchema;

    try {
      const ticket = await this.ticketService.getTicketById(id);

      if (!ticket) {
        throw new CustomError(StatusCodes.BAD_REQUEST, "Ticket id doesn't exist");
      }

      const data = await this.ticketService.updateTicket(id, body);

      return res.status(StatusCodes.OK).json({
        data: body,
        success: true,
        message: "Ticket Updated Successfully",
      });
    } catch (error) {
      throw new CustomError(StatusCodes.INTERNAL_SERVER_ERROR, "Server Error. Failed to update ticket");
    }
  };

  destroy = async (req: Request, res: Response) => {
    try {
      const { id }: { id?: string } = req.params;

      const ticket = await this.ticketService.getTicketById(id);

      if (!ticket) {
        throw new CustomError(StatusCodes.BAD_REQUEST, "Ticket id doesn't exist");
      }

      const data = await this.ticketService.deleteTicket(id);

      return res.status(StatusCodes.OK).json({
        data,
        success: true,
        message: "Ticket Deleted Successfully",
      });
    } catch (error) {
      throw new CustomError(StatusCodes.INTERNAL_SERVER_ERROR, "Server Error. Failed to delete ticket");
    }
  };
}

export default TicketController;
