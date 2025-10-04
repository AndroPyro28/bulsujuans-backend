import { Router } from "express";

import userRoutes from './app/users/routes'

const apiRouter = Router();

apiRouter.use("/users/:commentId", userRoutes);
apiRouter.use("/users/comments", userRoutes);
apiRouter.use("/users", userRoutes);

export default apiRouter;