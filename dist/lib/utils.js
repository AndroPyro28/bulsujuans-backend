"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initilizeSocket = void 0;
const socket_io_1 = require("socket.io");
const initilizeSocket = (server) => {
    const io = new socket_io_1.Server(server, {
        cors: {
            origin: "*",
            methods: ["GET", "POST", "DELETE", "PUT", "PATCH"],
        },
    });
    io.on("connection", (socket) => {
        console.log("socket connected!");
    });
    return io;
};
exports.initilizeSocket = initilizeSocket;
