// recipeRoute.js
// Nazeef Ahmad Farooqui
// 200590966
// 12/10/24

const express = require('express');

// Import the getTopRecipe
const { getTopRecipe } = require('../controller/recipeController');


const router = express.Router();

// Function to initialize the recipe route
const initializeRecipeRoute = () => {
    router.get('/top20', getTopRecipe)
    router.get('/list', getList)

    return router
}
// Export the initializeRecipeRoute
module.exports = {
    initializeRecipeRoute
}