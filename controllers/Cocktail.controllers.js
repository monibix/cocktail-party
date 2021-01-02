const Cocktail = require('../models/Cocktail.model')

const getCocktails = async (req, res) => {
    try {
        const allCocktails = await Cocktail.find()
        console.log('these are the cocktails,', allCocktails)
        res.render('cocktails', {allCocktails})
    } catch (error) {
        console.log('There is an error in the route getCocktails', error)
    }
}

const getCocktailDetail = async (req, res) => {
    try {
        res.render('cocktail-detail')
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