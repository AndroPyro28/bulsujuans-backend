"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const routes_1 = __importDefault(require("./app/users/routes"));
const routes_2 = __importDefault(require("./app/auth/routes"));
const apiRouter = (0, express_1.Router)();
apiRouter.use("/users", routes_1.default);
apiRouter.use("/auth", routes_2.default);
exports.default = apiRouter;
