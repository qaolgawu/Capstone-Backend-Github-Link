const {getRecipes, postRecipes, getRecipe} = require('../controllers/Recipe')
const recipeRouter = require('express').Router()

recipeRouter.post('/', postRecipes)

recipeRouter.get('/', getRecipes)
recipeRouter.get('/:id', getRecipe)

module.exports = recipeRouter