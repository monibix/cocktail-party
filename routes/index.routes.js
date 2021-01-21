const mongoose = require('mongoose')
const Cocktail = require('../models/Cocktail.model')
const express = require('express')
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
    const _id = req.session.currentUser
    res.render('index', {_id})
});

module.exports = router;

