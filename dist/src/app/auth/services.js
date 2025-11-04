"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../../lib/prisma"));
class Authhervice {
    constructor() {
        this.findByEmail = async (email) => {
            return await prisma_1.default.user.findUnique({
                where: {
                    email: email,
                },
                include: {
                    credential: true,
                    role: true,
                },
            });
        };
        this.findByStudentId = async (studentId) => {
            return await prisma_1.default.credential.findUnique({
                where: {
                    student_id: studentId,
                },
                include: {
                    user: true,
                },
            });
        };
        this.updateCredentials = async (email, data) => {
            return await prisma_1.default.credential.update({
                where: {
                    email: email,
                },
                data,
            });
        };
    }
}
exports.default = Authhervice;
