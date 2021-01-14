const express = require('express')
const router = express.Router();

const {
    getCocktails,
    getCocktailDetail,
    createCocktailView,
    createCocktail,
    updateCocktail,
    deleteCocktail, 
    editView
} = require('../controllers/Cocktail.controllers')

/* GET cocktails page */
router
    .get('/', getCocktails)
    .get('/create-cocktail', createCocktailView)
    .get('/:id', getCocktailDetail)
    .post('/create-cocktail', createCocktail)
    .post('/:id/delete', deleteCocktail)
    .get('/:id/edit', editView)
    .post('/:id/edit', updateCocktail)

module.exports = router;