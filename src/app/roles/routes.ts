import { Router } from "express";
import RoleController from "./controllers";
import { hasAllPermission } from "../../middlewares/permission";

const router: Router = Router();

const roleController = new RoleController();

router.get("/list", hasAllPermission(["users:view_list"]), roleController.list);
router.get("/show/:id", hasAllPermission(["users:view_detail"]), roleController.show);
router.post("/store", hasAllPermission(["users:create"]), roleController.store);
router.patch("update/:id", hasAllPermission(["users:edit"]), roleController.update);
router.delete("/destroy/:id", hasAllPermission(["users:delete"]), roleController.destroy);

export default router;
