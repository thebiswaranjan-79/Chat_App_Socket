var socket = io(); // Connect to the server

// let btn = document.getElementById("btn");
// btn.onclick = function exec() {
//   socket.emit("from_client");
// };

// socket.on("from_server", () => {
//   console.log("Collected a New Event from the Server");
//   const div = document.createElement("div");
//   div.innerText = "New event from the Server";
//   document.body.appendChild(div);
// });

let btn = document.getElementById("btn");
let inputMsg = document.getElementById("newmsg");
let msglist = document.getElementById("msglist");

btn.onclick = function exec() {
  socket.emit("msg_send", {
    msg: inputMsg.value,
  });
};

socket.on("msg_rcvd", (data) => {
  let limsg = document.createElement("li");
  limsg.innerText = data.msg;
  msglist.appendChild(limsg);
});
