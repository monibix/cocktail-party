const express = require('express')
const router = express.Router();

const {
    signupView,
    loginView,
    newUser,
    checkCredentials,
    login,
    logout,
    logInCheck
} = require('../controllers/auth.controller')

router
    .get('/signup', signupView)
    .get('/login', loginView)
    .post('/signup', checkCredentials, newUser)
    .post('/login', checkCredentials, login)
    .post('/logout', logout)
    
module.exports = router;

