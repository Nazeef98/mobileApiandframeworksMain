// recipeController.js
// Nazeef Ahmad Farooqui
// 200590966
// 12/10/24

const express = require('express');
const Recipe = require('../models/recipe')




const getRecipeList = (req, res) => {
    
    //logic for getting top records first with limit of 20 
 Recipe.find().sort({averageRating: -1}).limit(20).then(records => {
   res.json(records)
 }).catch(error =>{
    console.log(error);
    res.json({
        error
    })
    
 })
    
}

module.exports = {
    getRecipeList,
    
}