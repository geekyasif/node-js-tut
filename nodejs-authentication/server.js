const express = require('express')
const bcrypt = require('bcrypt')

const app = express()

app.use(express.json())

const users = []

app.get('/users', (req, res) => {

        res.json(users)
})


app.post('/users', async (req, res) => {

    try{
        const salt = await bcrypt.genSalt()
        const hashPassword =  await bcrypt.hash(req.body.password, salt)

        const user = {username : req.body.username, password : hashPassword}
        console.log(user)
        users.push(user)
        res.json({"message" : "user added successfully"})
    } 
    catch {
        res.status(400).send({"message" : "user not added "})
    }

  

})

app.post('/users/login', async (req, res) => {

        const user = users.find(user =>  user.username === req.body.username)

        if(user == null){
            res.status(404).send()
        }

        try{
            
            if ( await bcrypt.compare(req.body.password, user.password)) {
                res.send({"message" : "login successfully"})
            }
            else{
                res.send({"invalid login " : "username and password must be correct"})
            }

        }
        catch{
            res.status(500).send()
        }
})

app.listen(3000)