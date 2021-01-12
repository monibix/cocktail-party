const express = require('express')
const router = express.Router();

const {
    signupView,
    loginView
} = require('../controllers/auth.controller')

router.get('/signup', signupView)

router.get('/login', loginView)

module.exports = router;

