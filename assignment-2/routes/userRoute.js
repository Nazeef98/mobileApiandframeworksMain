// recipeRoute.js
// Nazeef Ahmad Farooqui
// 200590966
// 13/10/24

const express = require('express');

// Import  
const { register,login,logout } = require('../controller/userController');


const router = express.Router();

const initializeUserRoute = () => {
    //routes to register 
    router.post('/register',register)

    //routes for login
    router.post('/login',login)

    //route for logout
    router.post('/logout',logout)
    return router
}


// Export the initializeRecipeRoute
module.exports = {
    initializeUserRoute
}