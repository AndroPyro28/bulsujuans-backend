import { Router } from "express";
import TicketController from "./controllers";
import { hasAllPermission } from "../../middlewares/permission";
import validate from "../../lib/zod-validator";
import { updateTicketSchema } from "./schema";

const router: Router = Router();

const ticketController = new TicketController();

router.get("/options", ticketController.options);
router.get("/list", hasAllPermission(["tickets:view_list"]), ticketController.list);
router.get("/show/:id", hasAllPermission(["tickets:view_detail"]), ticketController.show);
router.patch("/update/:id", hasAllPermission(["tickets:edit"]), validate(updateTicketSchema), ticketController.update);
router.delete("/destroy/:id", hasAllPermission(["tickets:delete"]), ticketController.destroy);

export default router;
