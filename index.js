const express = require("express");

const app = express();
const http = require("http");
const socketio = require("socket.io");

const dotenv = require("dotenv");
dotenv.config();

const server = http.createServer(app);
const io = socketio(server);

const PORT = process.env.PORT || 3000; // Use PORT from environment variables or default to 3000

io.on("connection", (socket) => {
  console.log("A user connected", socket.id);

  socket.on("from_client", () => {
    console.log("Event Coming From CLient");
  });

  setInterval(() => {
    socket.emit("from_server");
  }, 2000);
});

app.use("/", express.static(__dirname + "/public"));

server.listen(PORT, () => {
  console.log(`Server Started at PORT ${PORT}`);
});
