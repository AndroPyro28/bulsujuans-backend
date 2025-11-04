"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = __importDefault(require("./services"));
const utils_1 = require("../../lib/utils");
const http_status_codes_1 = require("http-status-codes");
const cloudinary_1 = require("../../lib/config/cloudinary");
const service_1 = __importDefault(require("../documents/service"));
const service_2 = __importDefault(require("../tickets/service"));
class ComplaintController {
    constructor() {
        this.complaintService = new services_1.default();
        this.ticketService = new service_2.default();
        this.documentService = new service_1.default();
        this.list = async (req, res) => {
            try {
                const page = parseInt(req.query.page) || 1;
                const limit = parseInt(req.query.limit) || 10;
                const search = req.query.search || "";
                const offset = (page - 1) * limit;
                const complainant_id = req.query.complainant_id || undefined;
                const data = await this.complaintService.getComplaints(search, limit, offset, complainant_id);
                const total = await this.complaintService.getComplaintsTotal(search, complainant_id);
                return res.status(http_status_codes_1.StatusCodes.OK).json({
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
            }
            catch (error) {
                throw new utils_1.CustomError(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR, "Server Error. Failed to fetch complaints");
            }
        };
        this.show = async (req, res) => {
            try {
                const { id } = req.params;
                const data = await this.complaintService.getComplaintById(id);
                return res.status(http_status_codes_1.StatusCodes.OK).json({
                    data,
                    success: true,
                    message: "Get Complaint Detail",
                });
            }
            catch (error) {
                throw new utils_1.CustomError(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR, "Server Error. Failed to fetch complaint");
            }
        };
        this.store = async (req, res) => {
            const body = req.body;
            const files = req.files;
            try {
                const data = await this.complaintService.createComplaint(body);
                if (data) {
                    await this.ticketService.createTicket({
                        title: `Complaint #${data.id} - Status: ${data.complaint_status}`,
                        description: data.incident_detail,
                        complaint_id: data.id,
                    });
                }
                if (files && files.length > 0) {
                    const uploadedFiles = await Promise.all(files.map((file) => (0, cloudinary_1.uploadToCloudinary)(file.buffer, "complaints")));
                    const documents = uploadedFiles.map((file) => ({
                        public_url: file.url,
                        public_id: file.public_id,
                        complaint_id: data.id,
                    }));
                    await this.documentService.uploadDocument(documents);
                }
                return res.status(http_status_codes_1.StatusCodes.CREATED).json({
                    data: data,
                    success: true,
                    message: "Complaint Created Successfully",
                });
            }
            catch (error) {
                console.log("🚀 ~ ComplaintController ~ error:", error);
                throw new utils_1.CustomError(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR, "Server Error. Failed to create complaint");
            }
        };
        this.update = async (req, res) => {
            const { id } = req.params;
            const body = req.body;
            try {
                const complaint = await this.complaintService.getComplaintById(id);
                if (!complaint) {
                    throw new utils_1.CustomError(http_status_codes_1.StatusCodes.BAD_REQUEST, "Complaint id doesn't exist");
                }
                const data = await this.complaintService.updateComplaint(id, body);
                return res.status(http_status_codes_1.StatusCodes.OK).json({
                    data,
                    success: true,
                    message: "Complaint Updated Successfully",
                });
            }
            catch (error) {
                throw new utils_1.CustomError(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR, "Server Error. Failed to update complaint");
            }
        };
        this.destroy = async (req, res) => {
            try {
                const { id } = req.params;
                const complaint = await this.complaintService.getComplaintById(id);
                if (!complaint) {
                    throw new utils_1.CustomError(http_status_codes_1.StatusCodes.BAD_REQUEST, "Complaint id doesn't exist");
                }
                const data = await this.complaintService.deleteComplaint(id);
                return res.status(http_status_codes_1.StatusCodes.OK).json({
                    data,
                    success: true,
                    message: "Complaint Deleted Successfully",
                });
            }
            catch (error) {
                throw new utils_1.CustomError(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR, "Server Error. Failed to delete complaint");
            }
        };
    }
}
exports.default = ComplaintController;
