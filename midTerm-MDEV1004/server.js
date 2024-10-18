//import express
const express = require('express');
const app = express();
const fs = require('fs');

//to read the usedData from the JSON file and show it on the local host
const userData = JSON.parse(fs.readFileSync('./users.json','utf-8'));
app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'));
})

//initialised port 
const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log('server is running on '+ port)
})



