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

class CustomError extends Error {
  statusCode: number

  constructor(statusCode: number, message: string) {
    super(message)
    this.statusCode = statusCode
    // Keep proper stack trace (for debugging)
    Error.captureStackTrace(this, this.constructor)
  }
}


export {initilizeSocket, CustomError}


