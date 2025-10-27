import { Router } from "express";
import OfficeController from "./controllers";
import { hasAllPermission } from "../../middlewares/permission";
import validate from "../../lib/zod-validator";
import { storeOfficeSchema, updateOfficeSchema } from "./schema";

const router: Router = Router();

const officeController = new OfficeController();

router.get("/options", officeController.options); // use for form select options
router.get("/list", hasAllPermission(["offices:view_list"]), officeController.list);
router.get("/show/:id", hasAllPermission(["offices:view_detail"]), officeController.show);
router.post("/store", hasAllPermission(["offices:create"]), validate(storeOfficeSchema), officeController.store);
router.patch("/update/:id", hasAllPermission(["offices:edit"]), validate(updateOfficeSchema), officeController.update);
// router.delete("/destroy/:id", hasAllPermission(["offices:delete"]), officeController.destroy);

export default router;
