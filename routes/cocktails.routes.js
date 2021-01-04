const express = require('express')
const router = express.Router();

const {
    getCocktails,
    getCocktailDetail,
    createCocktail,
    updateCocktail,
    deleteCocktail
} = require('../controllers/Cocktail.controllers')

/* GET cocktails page */
router.get('/', getCocktails)

/* GET cocktail detail page */
router.get('/:id', getCocktailDetail)

module.exports = router;