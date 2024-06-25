const router = require('express').Router()
const userRouter = require('./User')
const recipeRouter = require('./recipes')

router.use('/user', userRouter)
router.use('/recipes', recipeRouter)





module.exports = router
