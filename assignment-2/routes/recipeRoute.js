// recipeRoute.js
// Nazeef Ahmad Farooqui
// 200590966
// 13/10/24

const express = require('express');

// Import the getTopRecipe
const { getTopRecipe,getList,recipeById, createNewRecipe,updateRecipe, deleteRecipe} = require('../controller/recipeController');


const router = express.Router();

// Function to initialize the recipe route
const initializeRecipeRoute = () => {
    //route to get 20 top
    router.get('/top20', getTopRecipe)

    //route to get list items
    router.get('/list', getList)

    //route to get by ID
    router.get('/find/:id',recipeById)

    //route to create new 
    router.post('/create',createNewRecipe)

    //route to update by ID
    router.put('/:id',updateRecipe)

    //route to delete by ID
    router.delete('/:id',deleteRecipe)


    return router
}


// Export the initializeRecipeRoute
module.exports = {
    initializeRecipeRoute
}