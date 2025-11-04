"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../../lib/prisma"));
class ComplaintService {
    constructor() { }
    async getComplaints(search, limit, offset, complainant_id) {
        return await prisma_1.default.complaint.findMany({
            where: {
                OR: [
                    { name: { contains: search } },
                    { email: { contains: search } },
                    { incident_detail: { contains: search } },
                ],
                complainant_id: complainant_id,
                deleted_at: null,
            },
            orderBy: {
                createdAt: "desc",
            },
            take: limit,
            skip: offset,
        });
    }
    async getComplaintsTotal(search, complainant_id) {
        return await prisma_1.default.complaint.count({
            where: {
                OR: [
                    { name: { contains: search } },
                    { email: { contains: search } },
                    { incident_detail: { contains: search } },
                ],
                complainant_id: complainant_id,
                deleted_at: null,
            },
        });
    }
    async getComplaintById(id) {
        return await prisma_1.default.complaint.findFirst({
            where: {
                id: {
                    equals: id,
                },
                deleted_at: null,
            },
        });
    }
    async createComplaint(data) {
        return await prisma_1.default.complaint.create({
            data: data,
        });
    }
    async updateComplaint(id, data) {
        return await prisma_1.default.complaint.update({
            where: {
                id: id,
            },
            data: data,
        });
    }
    async deleteComplaint(id) {
        return await prisma_1.default.complaint.update({
            where: {
                id: id,
            },
            data: {
                deleted_at: new Date(),
            },
        });
    }
}
exports.default = ComplaintService;
