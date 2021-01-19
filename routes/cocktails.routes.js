const express = require('express')
const router = express.Router();
const fileParser = require('../bin/cloudinary.config')
const { logInCheck } = require('../controllers/auth.controller')

const {
    getCocktails,
    getCocktailDetail,
    createCocktailView,
    createCocktail,
    updateCocktail,
    deleteCocktail, 
    editView, 
} = require('../controllers/Cocktail.controllers')

/* GET cocktails page */
router
    .get('/', getCocktails)
    .get('/create-cocktail', logInCheck, createCocktailView)
    .get('/:id', getCocktailDetail)
    .post('/create-cocktail', fileParser.single("cocktail-image"), createCocktail)
    .post('/:id/delete', deleteCocktail)
    .get('/:id/edit', editView)
    .post('/:id/edit', fileParser.single("cocktail-image"), updateCocktail)

module.exports = router;