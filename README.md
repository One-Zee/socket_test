# socket_test
## Client side 

#### see if the connection is succesfull
```
socket.on("connect", () => {
  console.log(socket.id); // PSuv7l1XmAAAD
});
```


#### Emit **'JoinRoom'** ,send name of the room to the backend
```
socket.emit('joinRoom','roomName')
```

####  Listen to **'newMessage'** 
```
socket.on('newMessage',(obj) => {
    // in here display the message and socket id of sender to DOM 
    console.log(obj.msg , obj.id)
  })
```

#### emit **'chat message'**  
```
socket.emit('chat message', 'some message');
```

####  Listen to **'newUserJoined'** and diplay new user connected
```
socket.on('newUserJoined',(msg) => {
    // display msg in DOM
    console.log(msg);
  })
```

### Listen to event `userLeft` when user disconnects
```
  socket.on('userLeft',(msg)=>{
    // display msg in DOM
    console.log(msg);
  })
```
