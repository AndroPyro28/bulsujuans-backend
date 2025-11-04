"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = __importDefault(require("./services"));
const utils_1 = require("../../lib/utils");
const http_status_codes_1 = require("http-status-codes");
class RoleController {
    constructor() {
        this.roleService = new services_1.default();
        this.list = async (req, res) => {
            try {
                const page = parseInt(req.query.page) || 1;
                const limit = parseInt(req.query.limit) || 10;
                const search = req.query.search || "";
                const offset = (page - 1) * limit;
                const data = await this.roleService.getRoles(search, limit, offset);
                const total = await this.roleService.getRolesTotal(search);
                return res.status(http_status_codes_1.StatusCodes.OK).json({
                    data: data,
                    success: true,
                    message: "Get Roles",
                    pagination: {
                        total,
                        page,
                        limit,
                        totalPages: Math.ceil(total / limit),
                    },
                });
            }
            catch (error) {
                throw new utils_1.CustomError(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR, "Server Error. Failed to fetch roles");
            }
        };
        this.show = async (req, res) => {
            try {
                const { id } = req.params;
                const data = await this.roleService.getRoleById(id);
                if (!data) {
                    throw new utils_1.CustomError(http_status_codes_1.StatusCodes.BAD_REQUEST, "Role id doesn't exist");
                }
                return res.status(http_status_codes_1.StatusCodes.OK).json({
                    data,
                    success: true,
                    message: "Get Role Detail",
                });
            }
            catch (error) {
                throw new utils_1.CustomError(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR, "Server Error. Failed to fetch role");
            }
        };
        this.store = async (req, res) => {
            const body = req.body;
            try {
                const role = await this.roleService.getRoleByName(body.name);
                if (role) {
                    throw new utils_1.CustomError(http_status_codes_1.StatusCodes.BAD_REQUEST, "Role already exist");
                }
                const data = await this.roleService.createRole(body);
                if (!data) {
                    throw new utils_1.CustomError(http_status_codes_1.StatusCodes.BAD_REQUEST, "Failed to create role");
                }
                return res.status(http_status_codes_1.StatusCodes.CREATED).json({
                    data,
                    success: true,
                    message: "Role Created Successfully",
                });
            }
            catch (error) {
                throw new utils_1.CustomError(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR, "Server Error. Failed to create role");
            }
        };
        this.update = async (req, res) => {
            const { id } = req.params;
            const body = req.body;
            try {
                const role = await this.roleService.getRoleById(id);
                if (!role) {
                    throw new utils_1.CustomError(http_status_codes_1.StatusCodes.BAD_REQUEST, "Role id doesn't exist");
                }
                const data = await this.roleService.updateRole(id, body);
                return res.status(http_status_codes_1.StatusCodes.OK).json({
                    data,
                    success: true,
                    message: "Role Updated Successfully",
                });
            }
            catch (error) {
                throw new utils_1.CustomError(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR, "Server Error. Failed to update role");
            }
        };
        this.destroy = async (req, res) => {
            try {
                const { id } = req.params;
                const role = await this.roleService.getRoleById(id);
                if (!role) {
                    throw new utils_1.CustomError(http_status_codes_1.StatusCodes.BAD_REQUEST, "Role id doesn't exist");
                }
                const data = await this.roleService.deleteRole(id);
                return res.status(http_status_codes_1.StatusCodes.OK).json({
                    data,
                    success: true,
                    message: "Role Deleted Successfully",
                });
            }
            catch (error) {
                throw new utils_1.CustomError(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR, "Server Error. Failed to delete role");
            }
        };
    }
}
exports.default = RoleController;
