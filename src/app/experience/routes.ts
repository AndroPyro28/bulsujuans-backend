import { Router } from "express";
import ExperienceController from "./controllers";
import { hasAllPermission } from "../../middlewares/permission";
import validate from "../../lib/zod-validator";
import { storeExperienceSchema, updateExperienceSchema } from "./schema";

const router: Router = Router();

const experienceController = new ExperienceController();

router.get("/options", experienceController.options);
router.get("/list", hasAllPermission(["profile:view_profile"]), experienceController.list);
router.get("/show/:id", hasAllPermission(["profile:view_profile"]), experienceController.show);
router.post(
  "/store",
  hasAllPermission(["profile:edit_profile"]),
  validate(storeExperienceSchema),
  experienceController.store
);
router.patch(
  "/update/:id",
  hasAllPermission(["profile:edit_profile"]),
  validate(updateExperienceSchema),
  experienceController.update
);
router.delete("/destroy/:id", hasAllPermission(["profile:edit_profile"]), experienceController.destroy);

export default router;
