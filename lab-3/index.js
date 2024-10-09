//importing express
const express = require('express');

const app = express();

//initialize port
const port = 3000;

//starting the serer code
app.listen(port, ()=>{
console.log(`server is running on http://localhost:${port}`);

})

