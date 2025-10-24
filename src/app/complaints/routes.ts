import { Router } from "express";
import ComplaintController from "./controllers";
import { hasAllPermission } from "../../middlewares/permission";
import validate from "../../lib/zod-validator";
import { storeComplaintSchema, updateComplaintSchema } from "./schema";
import { upload } from "../../lib/config/multer";

const router: Router = Router();

const complaintController = new ComplaintController();

router.get("/list", hasAllPermission(["complaint:view_list"]), complaintController.list);
router.get("/show/:id", hasAllPermission(["complaint:view_detail"]), complaintController.show);
router.post(
  "/store",
  hasAllPermission(["complaint:create"]),
  upload.array("documents"),
  validate(storeComplaintSchema),
  complaintController.store
);
router.patch(
  "/update/:id",
  hasAllPermission(["complaint:edit"]),
  validate(updateComplaintSchema),
  complaintController.update
);
router.delete("/destroy/:id", hasAllPermission(["complaint:delete"]), complaintController.destroy);

export default router;
