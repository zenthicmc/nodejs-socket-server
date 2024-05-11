const app = require("express")();
const socket = require("socket.io");

const server = app.listen(3005, () => console.log("Server has been started *:3005"));
const io = socket(server);

io.on("connection", (socket) => {
  console.log("New connection: ", socket.id);

  socket.on("message", (data) => {
    console.log("Received: ", data);
    socket.broadcast.emit("message", data);
  });
});