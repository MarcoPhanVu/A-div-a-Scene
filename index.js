const express = require('express');
const http = require('http');
const { Server } = require("socket.io")
const app = express(); //function Handler
const server = http.createServer(app);
const io = new Server(server);

app.get('/', (req, res) => { //route handler for every "/"

  res.sendFile('index.html', {'root': 'E:\\Projects\\Codes\\Webs\\Learning\\Chatting app'});

});

io.on('connection', (socket) => {
    socket.on('message', (msg) => {
      io.emit('message', msg);
    });
});

server.listen(3000, () => { //server port
  console.log('listening on *:3000');
});