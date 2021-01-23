const express = require('express')
const router = express.Router();

const {
    signupView,
    loginView,
    newUser,
    checkCredentials,
    login,
    logout,
    logInCheck, 
    logInCheckEmpieza, 
    userProfileView,
    updateUserProfile, 
    favouritesView,
    updateFavourites
} = require('../controllers/auth.controller')

router
    .get('/signup', signupView)
    .get('/login', loginView)
    
    .post('/signup', checkCredentials, newUser)
    .post('/login', checkCredentials, login)
    .post('/logout', logout)
    //.get('/user-profile', login)
    //.get('/', logInCheckEmpieza)

    .get('/user-favourites/:id', favouritesView)
    .get('/user-profile/:id', logInCheck, userProfileView)

    .post('/user-profile/:id', logInCheck, updateUserProfile)
    
module.exports = router;

