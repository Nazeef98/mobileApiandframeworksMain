// recipeController.js
// Nazeef Ahmad Farooqui
// 200590966
// 12/10/24

const express = require('express');
const Recipe = require('../models/recipe');
const recipe = require('../models/recipe');

//to get the list items
const getList = (req, res) => {
    Recipe.find().then(records => {
        res.json(records)
    }).catch(error => {
        console.log(error);
        res.json({
            error
        })

    })
}

//to find by ID
const recipeById = (req, res) => {
    const { id } = req.params
    console.log(id)
    Recipe.findOne({ _id:id }).then(records => {
        res.json(records)
    }).catch(error => {
        console.log(error);
        res.json({
            error
        })

    })
}

//to add new recipe
const createNewRecipe = (req,res) => {
    Recipe.create(req.body).then(records => {
        res.json(records)
    }).catch(error => {
        console.log(error);
        res.json({
            error
        })

    })

}

const getTopRecipe = (req, res) => {

    //logic for getting top records first with limit of 20 
    Recipe.find().sort({ averageRating: -1 }).limit(20).then(records => {
        res.json(records)
    }).catch(error => {
        console.log(error);
        res.json({
            error
        })

    })

}



module.exports = {
    getTopRecipe,
    getList,
    recipeById,
    createNewRecipe
}