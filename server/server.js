const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');

  // socket.emit('newEmail', {
  // 	from: 'prbkr@eg.com',
  // 	text: 'Hello Friend',
  // 	createdAt: 123
  // });

  // socket.on('createEmail', (newEmail)=> {
  // 	console.log('createEmail', newEmail);
  // });

  socket.emit('newMessage', {
  	from: 'prbkr',
  	text: 'Hello Friends',
  	createdAt: 1234
  });

  socket.on('createMessage', (newMessage)=> {
  	console.log('createMessage', newMessage);
  });

  socket.on('disconnect', () => {
    console.log('User was disconnected');
  });
});

server.listen(port, () => {
  console.log(`Server is up on ${port}`);
});