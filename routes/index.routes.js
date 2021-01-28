const mongoose = require('mongoose')
const Cocktail = require('../models/Cocktail.model')
const express = require('express')
const router = express.Router();

/* GET home page */
router.get('/', async(req, res, next) => {
    const _id = req.session.currentUser
    const allCocktails = await Cocktail.find().lean()
    const filteredCocktails = allCocktails.splice(0,4)
    const lastCocktails = allCocktails.sort((a,b)=>{
        return new Date(b.createdAt) - new Date(a.createdAt)
    }).slice(0,4)

    res.render('index', {filteredCocktails, _id, lastCocktails})
});

module.exports = router;
