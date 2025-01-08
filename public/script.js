var socket = io(); // Connect to the server

let btn = document.getElementById("btn");
btn.onclick = function exec() {
  socket.emit("from_client");
};

socket.on("from_server", () => {
  console.log("Collected a New Event from the Server");
  const div = document.createElement("div");
  div.innerText = "New event from the Server";
  document.body.appendChild(div);
});
