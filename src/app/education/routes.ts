import { Router } from "express";
import EducationController from "./controllers";
import { hasAllPermission } from "../../middlewares/permission";
import validate from "../../lib/zod-validator";
import { storeEducationSchema, updateEducationSchema } from "./schema";

const router: Router = Router();

const educationController = new EducationController();

router.get("/options", educationController.options);
router.get("/list", hasAllPermission(["profile:view_profile"]), educationController.list);
router.get("/show/:id", hasAllPermission(["profile:view_profile"]), educationController.show);
router.post(
  "/store",
  hasAllPermission(["profile:edit_profile"]),
  validate(storeEducationSchema),
  educationController.store
);
router.patch(
  "/update/:id",
  hasAllPermission(["profile:edit_profile"]),
  validate(updateEducationSchema),
  educationController.update
);
router.delete("/destroy/:id", hasAllPermission(["profile:edit_profile"]), educationController.destroy);

export default router;
