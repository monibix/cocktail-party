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

const createCocktail = async (req, res) => {
    try {
        
    } catch (error) {
        
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
    createCocktail,
    updateCocktail,
    deleteCocktail
}