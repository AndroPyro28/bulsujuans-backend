"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = __importDefault(require("./services"));
const server_1 = require("../../server");
class UserController {
    constructor() {
        this.userService = new services_1.default();
        this.create = async (req, res) => {
            try {
                const response = await this.userService.create("hello world");
                server_1.io.emit("hey", 1);
                return res.status(201).json(response);
            }
            catch (error) {
                console.log(error);
                return res.status(400).json({ message: "something went wrong..." });
            }
        };
    }
}
exports.default = UserController;
