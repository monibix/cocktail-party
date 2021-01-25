require('../app')
const Cocktail = require('../models/Cocktail.model')
const User = require('../models/User.model')

const getCocktails = async (req, res) => {
    try {
        const _id = req.session.currentUser
        const allCocktails = await Cocktail.find()
        res.render('cocktails', {allCocktails, _id})
    } catch (error) {
        console.log('There is an error in the route getCocktails', error)
    }
}

const getCocktailDetail = async (req, res) => {
    try {
        const _id = req.session.currentUser;
        const { id } = req.params

        const cocktailDetails = await Cocktail.findById(id);
        const user = await User.findById(_id);
        if (user) {
            const checkCocktail = user.myCocktails.includes(id)
            console.log("CHECKCOCT",checkCocktail)
            console.log('USER!!!!', user)
            console.log('show me now the cocktail cocktailDetails!!!! ', cocktailDetails)
            console.log("req.session.currentUser", req.session.currentUser)
            console.log("USERID", _id)
            res.render('cocktail-detail', {cocktailDetails, checkCocktail, _id}) // SI SE NOMBRA LA VARIABLE DE UNA FORMA DISTINTA A _ID NO FUNCIONA
        } else {
            res.render('cocktail-detail', {cocktailDetails, _id})
        }
    } catch (error) {
        console.log('There is an error in the route getCocktailDetail', error)
    }
}

const createCocktailView = async (req, res) => {
    try {
        const _id = req.session.currentUser
        const button = "Create"
        const action = "/cocktails/create-cocktail"
        res.render('create-cocktail', {button, action, _id})
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
        const _id = req.session.currentUser
        const { name, shortDescription, longDescription, category, instructions } = req.body
        const ingredients = formatIngredients(req.body)
        const measures = formatMeasures(req.body)
        const cocktailImage = req.file.path
        const newRecipe = await Cocktail.create({name, shortDescription, longDescription, category, instructions, cocktailImage, ingredients, measures})
        
        const userCreateCocktail = await User.findByIdAndUpdate(_id, {$push:{myCocktails:newRecipe._id}}, {new:true})
        console.log("USERCREATECOCKTAIL", userCreateCocktail)
        
        console.log('this is your new cocktail', newRecipe)
        res.redirect('/auth/user-profile/'+_id)
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
        const _id = req.session.currentUser
        const { id } = req.params
        const action = `/cocktails/${id}/edit`;
        const button = 'Edit Cocktail'
        const { ingredients, measures, ...resCocktail } = await Cocktail.findById(id).lean();
        const formattedIngredients = formatData(ingredients, "ingredient")
        const formattedMeasure = formatData(measures, "measure")
        console.log("RESCOCKTAIL", resCocktail)

        res.render('edit-cocktail', {action, button, ...resCocktail, ...formattedIngredients, ...formattedMeasure, _id })
    } catch (error) {
        console.log('There is an error in the route editCocktail', error)
    }
}

const updateCocktail = async (req, res) => {
    try {
        const _id = req.session.currentUser
        const { id } = req.params
        const { name, shortDescription, category, instructions } = req.body
        const ingredients = formatIngredients(req.body)
        const measures = formatMeasures(req.body)
        const imageUrl = req.file && req.file.path //si req.file no es undefined (si lo es queda como undefined), buscar req.file.path
        let newObj = {}
        if (imageUrl) {
            newObj = {
                    name: name,
                    shortDescription: shortDescription,
                    category: category,
                    instructions: instructions,
                    cocktailImage: imageUrl,
                    ingredients: ingredients,
                    measures: measures
            }
        } else {
            newObj = {name: name, 
                shortDescription: shortDescription, 
                category: category,
                instructions: instructions, 
                ingredients: ingredients, 
                measures: measures
                }
        }
        console.log("NEWOBJECT", newObj)
        const cocktail = await Cocktail.findByIdAndUpdate(id, newObj, {new:true})

        -
        res.redirect(`/cocktails/${id}`)
        // res.render('cocktail-detail', {...cocktail,  _id})
        // res.redirect('/{{id}}/edit')

    } catch (error) {
        console.log('There is an error in the updateCocktail', error)
    }
}

const addToFavourites = async (req, res) => {
    try {
        const { id } = req.params
        const _id = req.session.currentUser
        const cocktail = await Cocktail.findById(id).lean()
        console.log("COCKTAIL", cocktail)
        const user = await User.findById(_id)
        const addFavouriteCocktail = await User.findByIdAndUpdate(_id, { $push: { favourites: cocktail._id } }, { new: true })
        console.log("USER WITH FAVOURITES", addFavouriteCocktail)
        res.redirect(`/cocktails/${id}`)
    } catch (error) {
        console.log('There is an error in addToFavoruites!', error)
    }
}

const getFavourites = async (req,res)  => {
    try{
        const _id = req.session.currentUser;
        const { favourites } = await User.findById(_id)
        console.log("THESE ARE THE FAVOURTIES", favourites)
        res.render('user-favourites', {favourites, _id})
        // const cocktailsList = await Cocktail.find({});
        // console.log("this is the cocktails list:", cocktailsList);
        // const cocktails = cocktailsList.map(cocktail => {
        // const isFavourite = favourites.includes(cocktail._id)
        // return {
        //       ...cocktail,
        //       isFavourite
        // }
        // })
        // res.render("user-favourites", {cocktails})
    }catch(err){
        console.log('There is an error in getFavourites', error)
    }
};

module.exports = {
    getCocktails,
    getCocktailDetail,
    createCocktailView,
    createCocktail,
    updateCocktail,
    deleteCocktail, 
    editView,
    addToFavourites
}