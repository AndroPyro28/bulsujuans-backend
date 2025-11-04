"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = __importDefault(require("./controllers"));
const schema_1 = require("./schema");
const zod_validator_1 = __importDefault(require("../../lib/zod-validator"));
const authenticate_1 = require("../../middlewares/authenticate");
const router = (0, express_1.Router)();
const authhController = new controllers_1.default();
router.post("/register", authhController.register);
router.post("/login", (0, zod_validator_1.default)(schema_1.loginSchema), authhController.login);
router.post("/refresh", authenticate_1.refreshToken, authhController.refresh);
exports.default = router;
