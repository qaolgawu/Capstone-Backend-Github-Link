const Recipe = require('../models/Recipe')


module.exports.getRecipes = (req, res, next) => {
    Recipe.find()
    .then((recipes) => {
        res.send(recipes)
    })
    .catch(next)
}

module.exports.postRecipes = (req, res, next) => {
    try {
        req.body.forEach( async (recipe) => await Recipe.create(recipe))
        res.status(200).send('ok')
    } catch (error) {
        next(error)
    } 
}

module.exports.getRecipe = (req, res, next) => {
    Recipe.findById(req.params.id)
    .then((recipe) => {
        res.send(recipe)
    })
    .catch((err) => next(err))
}