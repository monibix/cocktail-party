const cocktailData = [
  {
    "name": "Margarita",
    "shortDescription": "A margarita is a Mexican cocktail consisting of tequila, orange liqueur, and lime juice often served with salt on the rim of the glass.",
    "longDescription": "A margarita is a Mexican cocktail consisting of tequila, orange liqueur, and lime juice often served with salt on the rim of the glass. The drink is served shaken with ice (on the rocks), blended with ice (frozen margarita), or without ice (straight up). Although it has become acceptable to serve a margarita in a wide variety of glass types, ranging from cocktail and wine glasses to pint glasses and even large schooners, the drink is traditionally served in the eponymous margarita glass, a stepped-diameter variant of a cocktail glass or champagne coupe.",
    "category": "Alcoholic",
    "ingredients": ["Tequila", "Triple sec", "Lime juice", "Salt"],
    "measures": ["1 1/2 oz", "1/2 oz", "1 oz"],
    "instructions": "Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.",
    "cocktailImage": "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg",
    }
];

require("dotenv").config()
const connectDb = require('../bin/db.config')
const Cocktail = require('../models/Cocktail.model')
const mongoose = require("mongoose")
  
const dbOptions = {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

async function seedDb() {
    try {
        await mongoose.connect("mongodb://localhost/cocktaildb", dbOptions) // process.env.MONGODB_URL
        const cocktails = await Cocktail.create(cocktailData)
        console.log('This is your cocktail data!!!!',cocktailData)
        mongoose.connection.close()
    } catch (err) {
        console.log(err)
    }
}

seedDb()