//importing express
const express = require('express');
const bodyParcer = require('body-parser');
const mongoose = require('mpngoose');

const app = express();

app.use(bodyParcer.json());
app.use(bodyParcer.urlencoded({extended:true}));

app.get('/', (req,res) => {
    res.send('server is up and running ')
})

//initialize port
const port = 3000;

//starting the serer code
app.listen(port, ()=>{
console.log(`server is running on http://localhost:${port}`);

})

