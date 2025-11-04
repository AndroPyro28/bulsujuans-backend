"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../../lib/prisma"));
class DocumentService {
    constructor() { }
    async uploadDocument(data) {
        return await prisma_1.default.documents.createMany({
            data: data,
        });
    }
}
exports.default = DocumentService;
