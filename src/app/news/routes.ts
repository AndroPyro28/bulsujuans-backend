import { Router } from "express";
import { hasAllPermission } from "../../middlewares/permission";
import validate from "../../lib/zod-validator";
import NewsController from "./controllers";

const router: Router = Router();

const newsController = new NewsController();

router.get("/options", newsController.options);
router.get("/list", hasAllPermission(["news:view_list"]), newsController.list);
router.get("/show/:id", hasAllPermission(["news:view_detail"]), newsController.show);
// router.post("/store", hasAllPermission(["news:create"]), validate(storenewsSchema), newsController.store);
// router.patch("/update/:id", hasAllPermission(["news:edit"]), validate(updatenewsSchema), newsController.update);
// router.delete("/destroy/:id", hasAllPermission(["news:delete"]), newsController.destroy);

export default router;
