// server.js
// Nazeef Ahmad Farooqui
// 200590966
// 13/10/24
const http = require('http');
const express = require('express');
const { log } = require('console');
const { initializeRecipeRoute } = require('./routes/recipeRoute');
const connectDB = require('./config/mongodb');
const { initializeUserRoute } = require('./routes/userRoute');
const app = express();
const server = http.createServer(app)
connectDB()
app.use(express.json())

//message comes up when server is up and runnign without error
app.get('/', (req,res) => {
    res.send('I am learning new things in mobile API and frameworks  ')
})
app.use('/recipe',initializeRecipeRoute())
app.use('/auth', initializeUserRoute())


const port = process.env.PORT || 3000;    //getting port from environment variable
server.listen(port,() => {
    console.log('Server started and listening to port'+ port);
})