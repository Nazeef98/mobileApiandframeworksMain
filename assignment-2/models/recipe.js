// recipe.js
// Nazeef Ahmad Farooqui
// 200590966
// 12/10/24

// models/Recipe.js
//schema for the API
const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    recipeName: { type: String, required: true },
    ingredients: { type: [String], required: true },
    cookingTime: { type: Number, required: true },
    difficulty: { type: String, required: true },
    cuisine: { type: String, required: true },
    description: { type: String, required: true },
    photoLink: { type: String, required: true },
    averageRating: { type: Number, required: true }
});

module.exports = mongoose.model('Recipe', recipeSchema);
