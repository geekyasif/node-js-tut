// creating server with express
const express = require('express')
const cors = require('cors');

// importing mongoose to connect with database
const mongoose = require('mongoose');

// importing the article route
const articleRoute = require('./routes/article')

const app = express()



// connecting with database 
mongoose.connect('mongodb://localhost/rest-api', {useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection;

// if the server is not connected to the database
db.on('error', (error) => console.error('connection error!' , error))

// if connected to the database
db.once('open', () => console.log("Connected to the database"))





// middlewares 
app.use(cors())
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded



// route for article
app.use('/articles', articleRoute)




// home page route
app.get('/',  (req, res) => {
    res.send("<h1>Welcome to home page</h1>")
})





// checking is the server is running on port or not 
app.listen(3000, ()=> {
    console.log('server is listening on port 3000')
})



// lets create database to store data 