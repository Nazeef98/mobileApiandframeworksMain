//importing express
const express = require('express');
const bodyParcer = require('body-parser');
const mongoose = require('mongoose');

const app = express();

//mongoDB atlas connection
const mongoURI = 'mongodb+srv://test:1hNSrF2z1ahFMy7v@cluster0.re95rja.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'


//connect to mongoDB atlas
mongoose.connect(mongoURI)
.then(() => {
    console.log('connected to DB')
})
.catch((error) => {
    console.log('error connecting with DB', error)
})

//for parcing json bodies
app.use(bodyParcer.json());
app.use(bodyParcer.urlencoded({extended:true}));

//define a route
app.get('/', (req,res) => {
    res.send('server is up and running ')
})
app.post('/submit', (req,res) => {
    res.send(`received data :${req.body.data}`)
})

//initialize port
const port = 3000;

//starting the serer code
app.listen(port, ()=>{
console.log(`server is running on http://localhost:${port}`);

})

