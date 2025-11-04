"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../../lib/prisma"));
class OfficeService {
    constructor() { }
    async getOfficeOptions() {
        return await prisma_1.default.office.findMany({
            where: {
                deleted_at: null,
            },
            orderBy: {
                name: "asc",
            },
            select: {
                id: true,
                name: true,
            },
        });
    }
    async getOffices(search, limit, offset, office_type) {
        return await prisma_1.default.office.findMany({
            where: {
                OR: [{ name: { contains: search } }, { desc: { contains: search } }],
                type: office_type,
                deleted_at: null,
            },
            orderBy: {
                name: "asc",
            },
            take: limit,
            skip: offset,
        });
    }
    async getOfficesTotal(search, office_type) {
        return await prisma_1.default.office.count({
            where: {
                OR: [{ name: { contains: search } }, { desc: { contains: search } }],
                type: office_type,
                deleted_at: null,
            },
        });
    }
    async getOfficeById(id) {
        return await prisma_1.default.office.findFirst({
            where: {
                id: {
                    equals: id,
                },
                deleted_at: null,
            },
        });
    }
    async getOfficeByName(name) {
        return await prisma_1.default.office.findFirst({
            where: {
                name: {
                    equals: name,
                },
                deleted_at: null,
            },
        });
    }
    async createOffice(data) {
        return await prisma_1.default.office.create({
            data: data,
        });
    }
    async updateOffice(id, data) {
        return await prisma_1.default.office.update({
            where: {
                id: id,
            },
            data: data,
        });
    }
    async deleteOffice(id) {
        return await prisma_1.default.office.update({
            where: {
                id: id,
            },
            data: {
                deleted_at: new Date(),
            },
        });
    }
}
exports.default = OfficeService;
