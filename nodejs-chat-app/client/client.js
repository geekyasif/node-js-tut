const socket = io('http://localhost:8000')

const form = document.getElementById('sendForm')
const messageInput = document.getElementById('messageInput')
const messageContainer = document.querySelector('.container')

// getting the name of new user when user want to join the chat and brodcast to the chat 
const name = prompt("Enter your name to join the chat.")
socket.emit('new-user-joined', name)




// this is called when user join message or left the chat for adding html and css
const append = (message, position) => {


    if(position === 'user-left' || position === 'user-join'){
        const messageElement = document.createElement('div')
        messageElement.innerHTML = message
        messageElement.classList.add(position)
        messageContainer.append(messageElement)
    }else if(position === 'send-message' || position === 'receive-message') {
        const messageElement = document.createElement('div')
        messageElement.classList.add('message');
        messageElement.innerHTML = message
        messageElement.classList.add(position)
        messageContainer.append(messageElement)

    }

 
}


// user join the chat 
socket.on('joined-the-chat', (name) => {

    append(`${name} : Join The Chat`, 'user-join')

})

// user left the chat 
socket.on('disconnet', name => {
    console.log('user left the chat')
    append(`${name} : left the chat`, 'user-left')
})



// sending the message to the other users
socket.on('receive-message', data =>{
    append(`${data.name} : ${data.message}`, 'receive-message')
})

// getting value from form
form.addEventListener('submit', e => {
    e.preventDefault()
    const message = messageInput.value

    append(`You : ${message}`, 'send-message')
    socket.emit('send-message', message)
    messageInput.value = ''
})