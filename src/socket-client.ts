import { Manager, Socket } from "socket.io-client";
export const connectToServer = () => {
  const manager = new Manager("http://localhost:3000/socket.io/socket.io.js");

  const socket = manager.socket("/");

  addListener(socket);
};

const addListener = (socket: Socket) => {
  const serverStatusLabel = document.querySelector("#server-status")!; // the '!' sign means that we are assure that the component will exists

  socket.on("connect", () => {
    console.log("connected...");
    serverStatusLabel.innerHTML = "connected";
  });

  socket.on("disconnect", () => {
    console.log("disconnected...");
    serverStatusLabel.innerHTML = "disconnected";
  });
};
