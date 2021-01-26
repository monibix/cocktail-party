const express = require('express')
const router = express.Router();
const fileParser = require('../bin/cloudinary.config')

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
    //favouritesView,
    //updateFavourites,
    //userCheck, 
    userProfilePublicView, 
    chatView
} = require('../controllers/auth.controller')

router
    .get('/signup', signupView)
    .get('/login', loginView)
    .post('/signup', checkCredentials, newUser) //userCheck crash app
    .post('/login', checkCredentials, login)
    .post('/logout', logout)
    //.get('/user-profile', login)
    //.get('/', logInCheckEmpieza)

    //.get('/user-favourites', favouritesView)
    .get('/user-profile/:id', logInCheck, userProfileView)
    .get('/user-profile-public/:id', userProfilePublicView)
    .get('/chat', chatView)

    .post('/user-profile/:id', logInCheck, fileParser.single("userImage"), updateUserProfile)
    
module.exports = router;

