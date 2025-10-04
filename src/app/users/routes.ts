import {Router} from "express";
import UserController from './controllers';
import validate from "../../lib/zod-validator";

const router: Router = Router();

const userController = new UserController()

router.post("/", userController.create.bind(userController))
export default router