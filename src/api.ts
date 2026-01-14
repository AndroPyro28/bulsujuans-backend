import { Router } from "express";

import userRoutes from "./app/users/routes";
import roleRoutes from "./app/roles/routes";
import accessRoutes from "./app/access/routes";
import officeRoutes from "./app/offices/routes";
import educationRoutes from "./app/education/routes";
import experienceRoutes from "./app/experience/routes";
import complaintRoutes from "./app/complaints/routes";
import ticketRoutes from "./app/tickets/routes";
import newsRoutes from "./app/news/routes";
import authRoutes from "./app/auth/routes";
import { authenticate } from "./middlewares/authenticate";
import errorHandler from "./middlewares/error-handler";

const apiRouter = Router();
apiRouter.use("/users", userRoutes);
apiRouter.use("/roles", authenticate, roleRoutes);
apiRouter.use("/access", authenticate, accessRoutes);
apiRouter.use("/complaints", authenticate, complaintRoutes);
apiRouter.use("/tickets", authenticate, ticketRoutes);
apiRouter.use("/offices", authenticate, officeRoutes);
apiRouter.use("/experience", authenticate, experienceRoutes);
apiRouter.use("/education", authenticate, educationRoutes);
apiRouter.use("/news", authenticate, newsRoutes);
apiRouter.use("/auth", authRoutes);
apiRouter.use(errorHandler);

export default apiRouter;
