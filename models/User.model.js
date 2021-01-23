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
    favourites: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Cocktail"
        }],
    myCocktails: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Cocktail'
        }
    ], 
    userImage: {
        type: String, 
        default: 'https://res.cloudinary.com/monibix/image/upload/v1611084105/cocktailparty/default-user_yq8kve.png'
    }, 
    address: {
        type: String,
        default: "Barcelona",
    }, 
    aboutUser: {
        type: String,
        default: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."  
    }
})

module.exports = mongoose.model( "User", UserSchema );


