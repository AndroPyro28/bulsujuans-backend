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
const officeController = new controllers_1.default();
router.get("/options", officeController.options); // use for form select options
router.get("/list", (0, permission_1.hasAllPermission)(["offices:view_list"]), officeController.list);
router.get("/show/:id", (0, permission_1.hasAllPermission)(["offices:view_detail"]), officeController.show);
router.post("/store", (0, permission_1.hasAllPermission)(["offices:create"]), (0, zod_validator_1.default)(schema_1.storeOfficeSchema), officeController.store);
router.patch("/update/:id", (0, permission_1.hasAllPermission)(["offices:edit"]), (0, zod_validator_1.default)(schema_1.updateOfficeSchema), officeController.update);
// router.delete("/destroy/:id", hasAllPermission(["offices:delete"]), officeController.destroy);
exports.default = router;
