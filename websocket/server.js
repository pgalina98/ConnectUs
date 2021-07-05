const dotenv = require("dotenv");

dotenv.config();

const WS_PORT = process.env.WS_PORT;
const io = require("socket.io")(WS_PORT, {
  cors: {
    origin: "http://localhost:3000",
  },
});

console.log("Web Socket server is listening on port: " + WS_PORT);

let onlineUsers = [];

const addOnlineUser = (userId, socketId) => {
  !onlineUsers.some((user) => user.userId === userId) &&
    onlineUsers.push({ userId, socketId });
};

const removeOnlineUser = (socketId) => {
  onlineUsers = onlineUsers.filter(
    (onlineUser) => onlineUser.socketId !== socketId
  );
};

const getUserById = (userId) => {
  return onlineUsers.find((onlineUser) => onlineUser.userId === userId);
};

io.on("connection", (socket) => {
  //New User is connected to Web Socket server
  console.log("User is successfuly connected.");

  //Save User and SocketID of connected Client
  socket.on("getUserData", (user) => {
    addOnlineUser(user._id, socket.id);
    io.emit("sendOnlineUsers", onlineUsers);
  });

  //Get Message from Client and send Message to other Clients
  socket.on("getMessage", ({ senderId, receiverId, messageText }) => {
    const userReceiver = getUserById(receiverId);
    io.to(userReceiver.socketId).emit("sendMessage", {
      senderId,
      messageText,
    });
  });

  //Online User is disconnected from Web Socket server
  socket.on("disconnect", () => {
    console.log("User is successfuly disconnected.");

    //Remove User from list of Online Users
    removeOnlineUser(socket.id);
    io.emit("sendOnlineUsers", onlineUsers);
  });
});
