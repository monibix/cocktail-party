const { Schema, model } = require('mongoose');

const cocktailSchema = new Schema({
    name: String,
    cocktailImage: String, 
    shortDescription: String, 
    longDescription: String, 
    category: String, 
    ingredients: [String], 
    measures: [String],
    instructions: [String],
}, 
    {
        timestamps: { createdAt: true, updatedAt: true }
    }
)

module.exports = model("Cocktail", cocktailSchema)