import express from 'express';
import { MongoClient } from 'mongodb';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT = 3000;
let db;


// MongoClient.connect('mongodb://localhost:27017/mydb', (err, client) => {
//     db = client.db('mydb')
// })


(async () => {
    const client = await MongoClient.connect('mongodb://localhost:27017/mydb');
    db = client.db('mydb')
})()



// --------------------------- Getting all data from database -----------------------------------------

// app.get('/', (req, res) => {
//     db.collection('users').find().toArray((err, data) => {
//         res.send(data)
//     })
// })


app.get('/', async (req, res) => {
    const data = await db.collection('users').find().toArray()
    res.send(data)
})


// --------------------------- Inserting data to the database -----------------------------------------

// app.get('/insert', (req, res) => {
//     db.collection('users').insertOne({
//         username: "newuser"
//     })
// })


app.get('/insert', async (req, res) => {
    const data = await db.collection('users').insertOne({ username: "newuser" })
    if (data["acknowledged"]) {
        res.send({ message: "Data  added successfully" })
    } else {
        res.send({ message: "Data not added" })
    }

})


// --------------------------- Getting all similar data from database using query like where -----------------------------------------
app.get('/find/:username', async (req, res) => {
    const { username } = req.params
    const data = await db.collection('users').find({ username: username }).toArray()
    console.log(typeof (username))
    res.send(data)
})




// --------------------------- Getting single data from database -----------------------------------------
app.get('/find-one/:username', async (req, res) => {
    const { username } = req.params
    const data = await db.collection('users').findOne({ username: username })
    res.send(data)
})



// Creating url for post request 
app.post('/insert-post', (req, res) => {
    console.log(req.body);
    res.send(req.body)
})



app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
})