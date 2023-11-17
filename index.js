
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const cookieParser = require("cookie-parser")
const cors = require("cors");
const dotenv = require("dotenv").config();
const databaseUrl = process.env.SERVERURL;
const app = express();
const mongo = require("./server_files/connectors/mongoConnector");
const mongooseConnector = require("./server_files/connectors/mongooseConnector");
const server = http.createServer(app);
const io = socketIO(server);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());
mongo.connect(databaseUrl);
mongooseConnector(databaseUrl);
// Define your routes here
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Socket.IO connection event
io.on('connection', (socket) => {
  console.log('A user connected');

  // Handle socket events here

  // Socket.IO disconnection event
  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

// Start the server
const port = 3000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
