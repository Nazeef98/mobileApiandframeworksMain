//importing express
const express = require('express');
const bodyParcer = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const fs = require('fs')

const path = require('path')

dotenv.config({path:'./config.env'})
const InitiateMongoServer = require('./db');
InitiateMongoServer()


//here reading data from movies
let data;
try{
const data = JSON.parse(fs.readFileSync('./movies.json','utf-8'));
console.log(data)
}catch(e){
console.log('error reading data',e)
}

const app = express();





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

