"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseEnumParam = parseEnumParam;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
exports.default = prisma;
function parseEnumParam(value, enumObj) {
    return Object.values(enumObj).includes(value) ? value : undefined;
}
