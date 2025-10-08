import "./lib//config/dotenv";
import express, { Application } from "express";
import path from "path";
import cors from "cors";
import http from "http";
import { initilizeSocket } from "./lib/utils";
import apiRouter from "./api";
import config from "./lib/config";
const app: Application = express();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "DELETE", "PUT", "PATCH"],
  })
);

app.use(express.json());
app.use("/public", express.static("public"));
app.use("/assets", express.static("public/assets"));
app.use("/api", apiRouter);

const server = http.createServer(app);
const PORT = config.PORT;
server.listen(PORT, () => console.info(`server listening on port ${PORT}`));

const io = initilizeSocket(server);

export { io };
