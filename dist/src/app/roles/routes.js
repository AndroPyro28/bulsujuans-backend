"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = __importDefault(require("./controllers"));
const permission_1 = require("../../middlewares/permission");
const zod_validator_1 = __importDefault(require("../../lib/zod-validator"));
const schema_1 = require("./schema");
const router = (0, express_1.Router)();
const roleController = new controllers_1.default();
router.get("/list", (0, permission_1.hasAllPermission)(["users:view_list"]), roleController.list);
router.get("/show/:id", (0, permission_1.hasAllPermission)(["users:view_detail"]), roleController.show);
router.post("/store", (0, permission_1.hasAllPermission)(["users:create"]), (0, zod_validator_1.default)(schema_1.storeRoleSchema), roleController.store);
router.patch("/update/:id", (0, permission_1.hasAllPermission)(["users:edit"]), (0, zod_validator_1.default)(schema_1.updateRoleSchema), roleController.update);
router.delete("/destroy/:id", (0, permission_1.hasAllPermission)(["users:delete"]), roleController.destroy);
exports.default = router;
