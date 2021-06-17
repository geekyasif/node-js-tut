const express = require('express')
const mainRouter = require('./routes/index')
const productsRouter = require('./routes/products')
const apiKeyMiddleware = require('./middlewares/apiKey')
const app = express()


//middlewares 
app.set('view engine', 'ejs')

// setting api key middleware for whole appication
// app.use(apiKeyMiddleware)


app.use(express.static('public'))

// this is used to send the json response to the client
app.use(express.json());


// app.use((req, res, next) => {
//     return res.json({
//         message : "Page Not Found!"
//     })
// })


// using routers for route pages
app.use(mainRouter)
app.use(productsRouter)



app.listen(3000, () => {
    console.log('Listening on port 3000...')
})