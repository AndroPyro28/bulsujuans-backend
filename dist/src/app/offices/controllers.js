"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = __importDefault(require("./services"));
const utils_1 = require("../../lib/utils");
const http_status_codes_1 = require("http-status-codes");
const client_1 = require("@prisma/client");
const prisma_1 = require("../../lib/prisma");
class OfficeController {
    constructor() {
        this.officeService = new services_1.default();
        this.options = async (req, res) => {
            try {
                const data = await this.officeService.getOfficeOptions();
                const formattedData = data.map((office) => ({
                    label: office.name,
                    value: office.id,
                }));
                return res.status(http_status_codes_1.StatusCodes.OK).json({
                    data: formattedData,
                    success: true,
                    message: "Get Office Options",
                });
            }
            catch (error) {
                throw new utils_1.CustomError(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR, "Server Error. Failed to fetch office options");
            }
        };
        this.list = async (req, res) => {
            try {
                const page = parseInt(req.query.page) || 1;
                const limit = parseInt(req.query.limit) || 10;
                const search = req.query.search || "";
                const offset = (page - 1) * limit;
                const office_type = (0, prisma_1.parseEnumParam)(req.query.office_type, client_1.OfficeType);
                const data = await this.officeService.getOffices(search, limit, offset, office_type);
                const total = await this.officeService.getOfficesTotal(search, office_type);
                return res.status(http_status_codes_1.StatusCodes.OK).json({
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
            }
            catch (error) {
                throw new utils_1.CustomError(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR, "Server Error. Failed to fetch offices");
            }
        };
        this.show = async (req, res) => {
            try {
                const { id } = req.params;
                const data = await this.officeService.getOfficeById(id);
                if (!data) {
                    throw new utils_1.CustomError(http_status_codes_1.StatusCodes.BAD_REQUEST, "Office id doesn't exist");
                }
                return res.status(http_status_codes_1.StatusCodes.OK).json({
                    data,
                    success: true,
                    message: "Get Office Detail",
                });
            }
            catch (error) {
                throw new utils_1.CustomError(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR, "Server Error. Failed to fetch office");
            }
        };
        this.store = async (req, res) => {
            const body = req.body;
            try {
                const office = await this.officeService.getOfficeByName(body.name);
                if (office) {
                    throw new utils_1.CustomError(http_status_codes_1.StatusCodes.BAD_REQUEST, "Office already exist");
                }
                const data = await this.officeService.createOffice(body);
                if (!data) {
                    throw new utils_1.CustomError(http_status_codes_1.StatusCodes.BAD_REQUEST, "Failed to create office");
                }
                return res.status(http_status_codes_1.StatusCodes.CREATED).json({
                    data,
                    success: true,
                    message: "Office Created Successfully",
                });
            }
            catch (error) {
                throw new utils_1.CustomError(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR, "Server Error. Failed to create office");
            }
        };
        this.update = async (req, res) => {
            const { id } = req.params;
            const body = req.body;
            try {
                const office = await this.officeService.getOfficeById(id);
                if (!office) {
                    throw new utils_1.CustomError(http_status_codes_1.StatusCodes.BAD_REQUEST, "Office id doesn't exist");
                }
                const data = await this.officeService.updateOffice(id, body);
                return res.status(http_status_codes_1.StatusCodes.OK).json({
                    data,
                    success: true,
                    message: "Office Updated Successfully",
                });
            }
            catch (error) {
                throw new utils_1.CustomError(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR, "Server Error. Failed to update office");
            }
        };
        this.destroy = async (req, res) => {
            try {
                const { id } = req.params;
                const office = await this.officeService.getOfficeById(id);
                if (!office) {
                    throw new utils_1.CustomError(http_status_codes_1.StatusCodes.BAD_REQUEST, "Office id doesn't exist");
                }
                const data = await this.officeService.deleteOffice(id);
                return res.status(http_status_codes_1.StatusCodes.OK).json({
                    data,
                    success: true,
                    message: "Office Deleted Successfully",
                });
            }
            catch (error) {
                throw new utils_1.CustomError(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR, "Server Error. Failed to delete office");
            }
        };
    }
}
exports.default = OfficeController;
