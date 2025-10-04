import { Server } from "socket.io";

const initilizeSocket = (server: any) => {
  const io = new Server(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST", "DELETE", "PUT", "PATCH"],
    },
  });
  io.on("connection", (socket) => {
    console.log("socket connected!");
  });

  return io
};

export {initilizeSocket}