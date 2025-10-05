"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = __importDefault(require("./services"));
class AuthController {
    constructor() {
        this.authService = new services_1.default();
        this.register = async (req, res) => {
            try {
                const response = await this.authService.register(req.body);
                return res.status(201).json(response);
            }
            catch (error) {
                console.log(error);
                return res.status(400).json({ message: "something went wrong..." });
            }
        };
    }
}
exports.default = AuthController;
