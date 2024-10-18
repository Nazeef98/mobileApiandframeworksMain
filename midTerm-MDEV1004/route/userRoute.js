const express = require('express');
const userRoute = express.Router();
const userController = require('../controller/userController');

//Route to import users
userRoute.get('/import',userController.importUsers);


module.exports = userRoute;