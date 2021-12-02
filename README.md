# socket_test

## Client side 

#### Emit **'JoinRoom'** ,send name of the room to the backend
```
socket.emit('joinRoom',roomName)
```

####  Listen to **'newMessage'** 
```
socket.on('newMessage',(msg) => {
    // in here display the message to DOM
    console.log(msg)
  })
```