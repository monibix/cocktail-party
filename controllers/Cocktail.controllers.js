const { render } = require('../app')
const Cocktail = require('../models/Cocktail.model')

const getCocktails = async (req, res) => {
    try {
        const allCocktails = await Cocktail.find()
        res.render('cocktails', {allCocktails})
    } catch (error) {
        console.log('There is an error in the route getCocktails', error)
    }
}

const getCocktailDetail = async (req, res) => {
    try {
        const { id } = req.params
        const details = await Cocktail.findById(id);
        console.log('show me now the cocktail details!!!! ', details)
        res.render('cocktail-detail', details)
    } catch (error) {
        console.log('There is an error in the route getCocktailDetail', error)
    }
}

const createCocktailView = async (req, res) => {
    try {
        res.render('create-cocktail')
    } catch (error) {
        console.log('There is an error in the route createCocktailView', error)
    }
}

const createCocktail = async (req, res) => {
    try {
        const newCocktail = req.body
        console.log('this is your new cocktail', newCocktail)
        await Cocktail.create(newCocktail)
        res.redirect('/cocktails')
    } catch (error) {
        console.log('There is an error in the route createCocktail', error)
    }
}

const deleteCocktail = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}

const updateCocktail = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}

module.exports = {
    getCocktails,
    getCocktailDetail,
    createCocktailView,
    createCocktail,
    updateCocktail,
    deleteCocktail
}