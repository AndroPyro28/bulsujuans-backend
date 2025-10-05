"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.io = void 0;
require("./lib//config/dotenv");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const http_1 = __importDefault(require("http"));
const utils_1 = require("./lib/utils");
const api_1 = __importDefault(require("./api"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: "*",
    methods: ["GET", "POST", "DELETE", "PUT", "PATCH"],
}));
app.use(express_1.default.json());
app.use("/api", api_1.default);
const server = http_1.default.createServer(app);
const PORT = process.env.PORT;
server.listen(PORT, () => console.info(`server listening on port ${PORT}`));
const io = (0, utils_1.initilizeSocket)(server);
exports.io = io;
