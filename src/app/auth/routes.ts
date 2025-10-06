import { Router } from "express";
import AuthhController from "./controllers";
import { loginSchema } from "./schema";
import validate from "../../lib/zod-validator";

const router: Router = Router();

const authhController = new AuthhController();

router.post("/register", authhController.register);
router.post("/login", validate(loginSchema), authhController.login);

export default router;
