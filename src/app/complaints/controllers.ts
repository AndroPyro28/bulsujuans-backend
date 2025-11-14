import { Request, Response } from "express";
import ComplaintService from "./services";
import { CustomError } from "../../lib/utils";
import { StatusCodes } from "http-status-codes";
import { TStoreComplaintSchema, TUpdateComplaintSchema } from "./schema";
import { uploadToCloudinary } from "../../lib/config/cloudinary";
import DocumentService from "../documents/service";
import TicketService from "../tickets/service";

class ComplaintController {
  private complaintService: ComplaintService = new ComplaintService();
  private ticketService: TicketService = new TicketService();
  private documentService: DocumentService = new DocumentService();
  constructor() {}

  list = async (req: Request, res: Response) => {
    try {
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 10;
      const search = (req.query.search as string) || "";
      const offset = (page - 1) * limit;
      const complainant_id = (req.query.complainant_id as string) || undefined;

      const data = await this.complaintService.getComplaints(search, limit, offset, complainant_id);
      const total = await this.complaintService.getComplaintsTotal(search, complainant_id);

      return res.status(StatusCodes.OK).json({
        data: data,
        success: true,
        message: "Get Complaints",
        pagination: {
          total,
          page,
          limit,
          totalPages: Math.ceil(total / limit),
        },
      });
    } catch (error) {
      throw new CustomError(StatusCodes.INTERNAL_SERVER_ERROR, "Server Error. Failed to fetch complaints");
    }
  };

  show = async (req: Request, res: Response) => {
    try {
      const { id }: { id?: string } = req.params;
      const data = await this.complaintService.getComplaintById(id, { withDocuments: true, withTickets: true });

      return res.status(StatusCodes.OK).json({
        data,
        success: true,
        message: "Get Complaint Detail",
      });
    } catch (error) {
      throw new CustomError(StatusCodes.INTERNAL_SERVER_ERROR, "Server Error. Failed to fetch complaint");
    }
  };

  store = async (req: Request, res: Response) => {
    const body = req.body as TStoreComplaintSchema;
    const files = req.files as Express.Multer.File[];

    try {
      const data = await this.complaintService.createComplaint(body);

      if (data) {
        await this.ticketService.createTicket({
          title: `Complaint #${data.id}`,
          description: data.incident_detail,
          complaint_id: data.id,
        });
      }

      if (files && files.length > 0) {
        const uploadedFiles = await Promise.all(files.map((file) => uploadToCloudinary(file.buffer, "complaints")));

        const documents = uploadedFiles.map((file) => ({
          public_url: file.url,
          public_id: file.public_id,
          complaint_id: data.id,
        }));

        await this.documentService.uploadDocument(documents);
      }

      return res.status(StatusCodes.CREATED).json({
        data: data,
        success: true,
        message: "Complaint Created Successfully",
      });
    } catch (error) {
      console.log("🚀 ~ ComplaintController ~ error:", error);
      throw new CustomError(StatusCodes.INTERNAL_SERVER_ERROR, "Server Error. Failed to create complaint");
    }
  };

  update = async (req: Request, res: Response) => {
    const { id }: { id?: string } = req.params;
    const body = req.body as TUpdateComplaintSchema;
    try {
      const complaint = await this.complaintService.getComplaintById(id);

      if (!complaint) {
        throw new CustomError(StatusCodes.BAD_REQUEST, "Complaint id doesn't exist");
      }

      const data = await this.complaintService.updateComplaint(id, body);

      return res.status(StatusCodes.OK).json({
        data,
        success: true,
        message: "Complaint Updated Successfully",
      });
    } catch (error) {
      throw new CustomError(StatusCodes.INTERNAL_SERVER_ERROR, "Server Error. Failed to update complaint");
    }
  };

  destroy = async (req: Request, res: Response) => {
    try {
      const { id }: { id?: string } = req.params;

      const complaint = await this.complaintService.getComplaintById(id);

      if (!complaint) {
        throw new CustomError(StatusCodes.BAD_REQUEST, "Complaint id doesn't exist");
      }

      const data = await this.complaintService.deleteComplaint(id);

      return res.status(StatusCodes.OK).json({
        data,
        success: true,
        message: "Complaint Deleted Successfully",
      });
    } catch (error) {
      throw new CustomError(StatusCodes.INTERNAL_SERVER_ERROR, "Server Error. Failed to delete complaint");
    }
  };
}

export default ComplaintController;
