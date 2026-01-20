require("dotenv").config();
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const connectDB = require("./config/db");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

connectDB();
app.use(express.json());
app.use(express.json());
app.use(express.static("public"));

app.use("/api/chat", require("./routes/chatRoutes"));

require("./socket/socket")(io);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
