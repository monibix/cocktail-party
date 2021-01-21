const mongoose = require('mongoose');

const emailRegex = /^\S+@\S+\.\S+$/;

const UserSchema = new mongoose.Schema({
    email: {
        type: String, 
        required: true, 
        unique: true,
        match: emailRegex, 
        trim: true
    },
    password: {
        type: String, 
        required: true, 
        trim: true
    },
    username: {
        type: String, 
        default: 'Bartender'
    },  
    phone: Number,
    favourites: Array,
    myCocktails: Array, 
    userImage: {
        type: String, 
        default: 'https://res.cloudinary.com/monibix/image/upload/v1611084105/cocktailparty/default-user_yq8kve.png'
    }, 
    address: String, 
    aboutUser: String
})

module.exports = mongoose.model( "User", UserSchema );


