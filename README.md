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
socket.on('newMessage',(msg) => {
    // in here display the message to DOM
    console.log(msg)
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