// recipeRoute.js
// Nazeef Ahmad Farooqui
// 200590966
// 12/10/24

const express = require('express');

// Import the getTopRecipe
const { getTopRecipe,getList,recipeById, createNewRecipe,updateRecipe} = require('../controller/recipeController');


const router = express.Router();

// Function to initialize the recipe route
const initializeRecipeRoute = () => {
    router.get('/top20', getTopRecipe)
    router.get('/list', getList)
    router.get('/find/:id',recipeById)
    router.post('/create',createNewRecipe)
    router.put('/:id',updateRecipe)
    return router
}
// Export the initializeRecipeRoute
module.exports = {
    initializeRecipeRoute
}