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
const multer_1 = require("../../lib/config/multer");
const router = (0, express_1.Router)();
const complaintController = new controllers_1.default();
router.get("/list", (0, permission_1.hasAllPermission)(["complaint:view_list"]), complaintController.list);
router.get("/show/:id", (0, permission_1.hasAllPermission)(["complaint:view_detail"]), complaintController.show);
router.post("/store", (0, permission_1.hasAllPermission)(["complaint:create"]), multer_1.upload.array("documents"), (0, zod_validator_1.default)(schema_1.storeComplaintSchema), complaintController.store);
router.patch("/update/:id", (0, permission_1.hasAllPermission)(["complaint:edit"]), (0, zod_validator_1.default)(schema_1.updateComplaintSchema), complaintController.update);
router.delete("/destroy/:id", (0, permission_1.hasAllPermission)(["complaint:delete"]), complaintController.destroy);
exports.default = router;
