import { Router } from "express";

import userRoutes from "./app/users/routes";
import roleRoutes from "./app/roles/routes";
import authRoutes from "./app/auth/routes";
import { authenticate } from "./middlewares/authenticate";

const apiRouter = Router();

apiRouter.use("/users", userRoutes);
apiRouter.use("/roles", authenticate, roleRoutes);
apiRouter.use("/auth", authRoutes);

export default apiRouter;
