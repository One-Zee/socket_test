const PORT = process.env.PORT || 2000;
const express = require('express')
//const socket = require('socket.io')
const http = require('http');

const app = express();
const server = http.createServer(app);
const corsOpt = {
  cors: { 
    origin: "*",
    methods: ["GET", "POST"],
    //allowEIO3: true // false by default
    
  }
}

const { Server } = require('socket.io');
const io = new Server(server, corsOpt);

/*
app.use('/socket',(req,res)=>{
    res.send('conn succesfull')
})*/

var a = 1// user counter

io.on('connection', (socket) => {
  let room = []
  console.log("user socketID: " + socket.id); // PSuv7l1XmAAAD
    /**
     *  Checking user Connection!!
     */
    console.log('a user ' + a++ + ' connected');
    socket.on('disconnect', () => {
      console.log('user disconnected');
      if(room[0] !== undefined){
        socket.broadcast.to(room[0].room).emit('userLeft','User by id ' + socket.id + ' disconnected.')
      }
    });
    /**
     *  log the chat message
     */
    socket.on('chat message', (msg) => {
        console.log('user socketID: ' + socket.id +'-> message: ' + msg);
        if(room[0] !== undefined){
        console.log('soba: ',room[0].room);
        socket.broadcast.to(room[0].room).emit('newMessage',{msg, id:socket.id})
        }
      });
    
    /**
     *  emiting simple mesagge
     */
    socket.emit("hello", "world");
    
    // creating a room array for storing rooms
    
    
    /**
     * listener on "joinRoom" sets socketID to specific room
     */
      socket.on('joinRoom',(roomName)=>{
        //console.log(socket.rooms); // Set { <socket.id> }
        socket.join(roomName);
        //console.log(socket.rooms); // Set { <socket.id>, "room1" }
        if(room[0] !== undefined){
          socket.leave(room[0].room)
          room = []
        }
        room.push({ room:roomName,socketId:socket.id})
        console.log(room[0]);
        socket.broadcast.to(roomName).emit('newUserJoined',{ id:socket.id , msg: 'New user joined ' })
      })

      


  });
  

  //io.of("/").emit("hi", "everyone");

  
server.listen(PORT,()=>{
    console.log('Server is running on port ' + PORT);
})