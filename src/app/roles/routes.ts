import { Router } from "express";
import RoleController from "./controllers";
import { permission } from "../../middlewares/permission";

const router: Router = Router();

const roleController = new RoleController();

router.get("/list", permission("users:view_list"), roleController.list);
router.get("/show/:id", permission("users:view_detail"), roleController.show);
router.post("/store", permission("users:create"), roleController.store);
router.patch("update/:id", permission("users:edit"), roleController.update);
router.delete("/destroy/:id", permission("users:delete"), roleController.destroy);

export default router;
