"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../../lib/prisma"));
class RoleService {
    constructor() { }
    async getRoles(search, limit, offset) {
        return await prisma_1.default.role.findMany({
            where: {
                OR: [{ name: { contains: search } }, { desc: { contains: search } }],
                deleted_at: null,
            },
            orderBy: {
                name: "asc",
            },
            take: limit,
            skip: offset,
        });
    }
    async getRolesTotal(search) {
        return await prisma_1.default.role.count({
            where: {
                OR: [{ name: { contains: search } }, { desc: { contains: search } }],
                deleted_at: null,
            },
        });
    }
    async getRoleById(id) {
        return await prisma_1.default.role.findFirst({
            where: {
                id: {
                    equals: id,
                },
                deleted_at: null,
            },
        });
    }
    async getRoleByName(name) {
        return await prisma_1.default.role.findFirst({
            where: {
                name: {
                    equals: name,
                },
                deleted_at: null,
            },
        });
    }
    async createRole(data) {
        return await prisma_1.default.role.create({
            data: data,
        });
    }
    async updateRole(id, data) {
        return await prisma_1.default.role.update({
            where: {
                id: id,
            },
            data: data,
        });
    }
    async deleteRole(id) {
        return await prisma_1.default.role.update({
            where: {
                id: id,
            },
            data: {
                deleted_at: new Date(),
            },
        });
    }
    async getUserAccess(email) {
        const userAccess = await prisma_1.default.user.findUnique({
            where: { email: email },
            select: {
                role: {
                    select: {
                        access: true,
                    },
                },
            },
        });
        const accessList = userAccess?.role?.access || [];
        return accessList;
    }
}
exports.default = RoleService;
