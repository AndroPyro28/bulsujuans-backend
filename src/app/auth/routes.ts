import { Router } from "express";
import AuthhController from "./controllers";

const router: Router = Router();

const authhController = new AuthhController();

router.post("/register", authhController.register);

export default router;
