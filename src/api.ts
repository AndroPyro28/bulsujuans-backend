import { Router } from "express";

import userRoutes from "./app/users/routes";
import authRoutes from "./app/auth/routes";

const apiRouter = Router();

apiRouter.use("/users", userRoutes);
apiRouter.use("/auth", authRoutes);

export default apiRouter;
