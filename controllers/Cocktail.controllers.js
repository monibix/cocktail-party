require('../app')
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

function formatIngredients(data){
    const {ingredient1, ingredient2, ingredient3, ingredient4, ingredient5} = data
    return [ingredient1, ingredient2, ingredient3, ingredient4, ingredient5].filter(Boolean)
}
function formatMeasures(data){
const {measure1, measure2, measure3, measure4, measure5} = data
return [measure1, measure2, measure3, measure4, measure5].filter(Boolean)
}


const createCocktail = async (req, res) => {
    try {
        const { name, shortDescription, longDescription, category, instructions, cocktailImage } = req.body
        const ingredients = formatIngredients(req.body)
        const measures = formatMeasures(req.body)
        const newRecipe = await Cocktail.create({name, shortDescription, longDescription, category, instructions, cocktailImage, ingredients, measures})
        console.log('this is your new cocktail', newRecipe)
        res.redirect('/cocktails')
    } catch (error) {
        console.log('There is an error in the route createCocktail', error)
    }
}

const deleteCocktail = async (req, res) => {
    try {
        const { id } = req.params
        console.log("ID", id)
        await Cocktail.findByIdAndRemove(id)
        res.redirect("/cocktails")
    } catch (error) {
        console.log('There is an error in the route deleteCocktail', error)
    }
}

function formatData(ingredients, domain){
    let formattedData = {}
    ingredients.forEach((ing, i) => {
        const key = `${domain}${i + 1}`
        formattedData[key] = ing
    })
    return formattedData
}
const editView = async (req, res) => {
    try {
        const { id } = req.params
        const action = `/cocktails/${id}/edit`;
        //problema con resCocktail
        const { ingredients, measures, ...resCocktail } = await Cocktail.findById(id);
        const formattedIngredients = formatData(ingredients, "ingredient")
        const formattedMeasure = formatData(measures, "measure")
        console.log("RESCOCKTAIL", resCocktail)

        res.render('edit-cocktail', {action, ...resCocktail, ...formattedIngredients, ...formattedMeasure })
    } catch (error) {
        console.log('There is an error in the route editCocktail', error)
    }
}

const updateCocktail = async (req, res) => {
    try {
        const { id } = req.params
        const { name, shortDescription, longDescription, category, instructions, cocktailImage } = req.body
        const ingredients = formatIngredients(req.body)
        const measures = formatMeasures(req.body)
        const newObj = {name: name, 
                        shortDescription: shortDescription, 
                        longDescription: longDescription, 
                        category: category,
                        instructions: instructions, 
                        cocktailImage: cocktailImage, 
                        ingredients: ingredients, 
                        measures: measures
        }
        console.log("NEWOBJECT", newObj)
        const cocktail = await Cocktail.findByIdAndUpdate(id, newObj)

        res.redirect(`/cocktails/${id}`)

    } catch (error) {
        console.log('There is an error in the updateCocktail', error)
    }
}

module.exports = {
    getCocktails,
    getCocktailDetail,
    createCocktailView,
    createCocktail,
    updateCocktail,
    deleteCocktail, 
    editView
}