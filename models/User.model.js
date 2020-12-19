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
})

module.export = mongoose.model( "User", UserSchema );
