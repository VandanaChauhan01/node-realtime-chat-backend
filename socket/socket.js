const Message = require("../models/Message");

module.exports = (io) => {
  io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    socket.on("joinRoom", ({ username, room }) => {
      socket.join(room);
      socket.to(room).emit("message", {
        username: "System",
        message: `${username} joined the room`
      });
    });

    socket.on("chatMessage", async (data) => {
      const msg = await Message.create(data);
      io.to(data.room).emit("message", msg);
    });

    socket.on("typing", (room) => {
      socket.to(room).emit("typing");
    });

    socket.on("disconnect", () => {
      console.log("User disconnected:", socket.id);
    });
  });
};
