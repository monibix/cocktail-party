const mongoose = require('mongoose')
const Cocktail = require('../models/Cocktail.model')
const express = require('express')
const router = express.Router();

/* GET home page */
router.get('/', async(req, res, next) => {
    const _id = req.session.currentUser
    // const newCreations = await Cocktail.find() //timestamps
    // console.log("NEW CREATIONS", newCreations)
    res.render('index', {_id})
});

module.exports = router;

