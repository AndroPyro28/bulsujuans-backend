import { Router } from "express";
import RoleController from "./controllers";
import { hasAllPermission } from "../../middlewares/permission";
import validate from "../../lib/zod-validator";
import { storeRoleSchema, updateRoleSchema } from "./schema";

const router: Router = Router();

const roleController = new RoleController();

router.get("/list", hasAllPermission(["roles:view_list"]), roleController.list);
router.get("/show/:id", hasAllPermission(["roles:view_detail"]), roleController.show);
router.post("/store", hasAllPermission(["roles:create"]), validate(storeRoleSchema), roleController.store);
router.patch("/update/:id", hasAllPermission(["roles:edit"]), validate(updateRoleSchema), roleController.update);
router.delete("/destroy/:id", hasAllPermission(["roles:delete"]), roleController.destroy);

export default router;
