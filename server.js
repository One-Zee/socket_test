const express = require('express')
const socket = require('socket.io')
const PORT = process.env.PORT || 2000;
const http = require('http');
const app = express();
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);


app.use('/',(req,res)=>{
    res.sendFile(__dirname + '/client/index.html')
})

app.use('/new',(req,res)=>{
    res.json('come on son')
})
var a = 1// user counter

io.on('connection', (socket) => {
  console.log(socket.id); // PSuv7l1XmAAAD
    /**
     *  Checking user Connection!!
     */
    console.log('a user ' + a++ + ' connected');
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
    /**
     *  log the chat message
     */
    socket.on('chat message', (msg) => {
        console.log('message: ' + msg);
      });
    
    /**
     *  emiting simple mesagge
     */
    socket.emit("hello", "world");
    
    // creating a room array for storing rooms
    const room = []
    
    /**
     * listener on "joinRoom" sets socketID to specific room
     */
      socket.on('joinRoom',(roomName)=>{
        //console.log(socket.rooms); // Set { <socket.id> }
        socket.join(roomName);
        console.log(socket.rooms); // Set { <socket.id>, "room1" }
        room.push({ room:roomName,socketId:socket.id})
        //console.log(room);
      })
      

  });
  

  //io.of("/").emit("hi", "everyone");

  
server.listen(PORT,()=>{
    console.log('Server is running on port ' + PORT);
})