const mongoose = require('mongoose')
const Cocktail = require('../models/Cocktail.model')
const express = require('express')
const router = express.Router();

/* GET home page */
router.get('/', async(req, res, next) => {
    const _id = req.session.currentUser
    const allCocktails = await Cocktail.find().lean()
    const filteredCocktails = allCocktails.splice(0,4)
    //console.log("filteredCocktails", filteredCocktails)

    const lastCocktails = allCocktails.sort((a,b)=>{
        return new Date(b.createdAt) - new Date(a.createdAt)
    }).slice(0,4)
    // const newCreations = await Cocktail.find() //timestamps
    // console.log("NEW CREATIONS", newCreations)
    res.render('index', {filteredCocktails, _id, lastCocktails})
});

module.exports = router;

// const getCocktails = async (req, res) => {
//     try {
//         const _id = req.session.currentUser
//         const allCocktails = await Cocktail.find()
//         res.render('cocktails', {allCocktails, _id})
//     } catch (error) {
//         console.log('There is an error in the route getCocktails', error)
//     }
// }