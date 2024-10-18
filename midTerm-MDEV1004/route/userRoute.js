const express = require('express');
const userRoute = express.Router();
const userController = require('../controller/userController');

//Route to import users
userRoute.get('/import',userController.importUsers);

//routes to get the user list 
userRoute.get('/', userController.getUsers);

//routes to get the user by the ID 
userRoute.get('/:id',userController.getUserById)



module.exports = userRoute;