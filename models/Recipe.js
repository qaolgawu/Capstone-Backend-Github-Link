const { string } = require('joi');
const mongoose = require('mongoose');


const recipeSchema = new mongoose.Schema({
    kcal : {
        type: String,
        required: true
    },
    cookingTime : {
        type: String,
        required: true
    },
    name : {
        type: String,
        required: true
    },
    description : {
        type: String,
        required: true
    },
    img : {
        type: String,
        required: true
    },
    step : {
        type: Array,
        required: true
    },
}, { toJSON: { useProtection: true }, toObject: { useProtection: true } });


module.exports = mongoose.model('Recipe', recipeSchema)