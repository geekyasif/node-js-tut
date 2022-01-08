const io = require("socket.io")(8000)

const users = {};


io.on('connection', socket => {

    // when user is connected 
    socket.on('new-user-joined', name => {

        console.log("new user joined" , name)

        users[socket.id] = name;
        socket.broadcast.emit("joined-the-chat", name)
    
        
    });


    // when user send the message
    socket.on('send-message', message => {
        socket.broadcast.emit('receive-message', { message: message, name: users[socket.id] })
    });


    // when user disconnect or left the chat 
    socket.on('disconnet', name => {
        io.emit('left-the-chat', name)
        delete users[user.id]
        console.log("user is disconnected")
    });
})

// //
// first importing the socket io from socket io
// create a list of users that containt name and users.id

// when new user is joined save that user in users list and broadcast to the other users 
// that new user join the chat

// when user send the message broadcast the message to the user

// when user leave the chat brodcast the message 