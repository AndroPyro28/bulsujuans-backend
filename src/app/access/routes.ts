import { Router } from "express";
import AccessController from "./controllers";
import { hasAllPermission } from "../../middlewares/permission";
import validate from "../../lib/zod-validator";
import { addAccessSchema, storeAccessSchema, updateAccessSchema } from "./schema";

const router: Router = Router();

const accessController = new AccessController();

router.get("/options", accessController.options);
router.get("/list", hasAllPermission(["access:view_list"]), accessController.list);
router.get("/show/:id", hasAllPermission(["access:view_detail"]), accessController.show);
router.post("/store", hasAllPermission(["access:create"]), validate(storeAccessSchema), accessController.store);
router.post("/store/add-access", hasAllPermission(["access:edit"]),validate(addAccessSchema), accessController.addAccess);

router.patch("/update/:id", hasAllPermission(["access:edit"]), validate(updateAccessSchema), accessController.update);
router.delete("/destroy/:id", hasAllPermission(["access:delete"]), accessController.destroy);
router.delete("/destroy_ra/:id", hasAllPermission(["access:delete"]), accessController.destroyRoleAccess);

export default router;
