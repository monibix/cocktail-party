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
    },
    {
        "name": "Mojito",
        "shortDescription": "Mojito is a traditional Cuban highball. The cocktail often consists of five ingredients: white rum, sugar (traditionally sugar cane juice), lime juice, soda water, and mint.",
        "longDescription": "Mojito is a traditional Cuban highball. Its combination of sweetness, citrus, and herbaceous mint flavours is intended to complement the rum, and has made the mojito a popular summer drink.",
        "category": "Alcoholic",
        "instructions": "Muddle mint leaves with sugar and lime juice. Add a splash of soda water and fill the glass with cracked ice. Pour the rum and top with soda water. Garnish and serve with straw.",
        "cocktailImage": "https://www.thecocktaildb.com/images/media/drink/metwgh1606770327.jpg",
        "ingredients": ["Light rum", "Lime", "Sugar", "Mint", "Soda water"],
        "measures": ["2-3 oz ", "Juice of 1 ", "2 tsp ", "2-4 "]
    },
    {
        "name": "Cosmopolitan",
        "shortDescription": "A cosmopolitan, or informally a cosmo, is a cocktail made with vodka, triple sec, cranberry juice, and freshly squeezed or sweetened lime juice.",
        "longDescription": "The cosmopolitan cocktail gained popularity quickly. It traveled from Provincetown, through New York, Cleveland, and Cincinnati, and on to San Francisco. It could also possibly have been from Miami to San Francisco, and on to New York. The cosmopolitan gained popularity in the 1990s. It was further popularized among young women by its frequent mention on the television program Sex and the City,[9] where Sarah Jessica Parker's character, Carrie Bradshaw, commonly ordered the drink when out with her girlfriends.",
        "category": "Alcoholic",
        "instructions": "Add all ingredients into cocktail shaker filled with ice. Shake well and double strain into large cocktail glass. Garnish with lime wheel.",
        "cocktailImage": "https://www.thecocktaildb.com/images/media/drink/kpsajh1504368362.jpg",
        "ingredients": ["Absolut Citron", "Lime juice", "Cointreau", "Cranberry juice"],
        "measures": ["1 1/4 oz ", "1/4 oz ", "1/4 oz ", "1/4 cup "]
    },
    {
        "name": "Caipirinha",
        "shortDescription": "Caipirinha is Brazil's national cocktail, made with cachaça (sugarcane hard liquor), sugar, and lime.",
        "longDescription": "Caipirinha is prepared by mixing the fruit and the sugar together, then adding the liquor. This can be made in a single large glass to be shared among people, or in a larger jar, from which it is served in individual glasses.",
        "category": "Alcoholic",
        "instructions": "Place lime and sugar into old fashioned glass and muddle (mash the two ingredients together using a muddler or a wooden spoon). Fill the glass with ice and add the Cachaça.",
        "cocktailImage": "https://www.thecocktaildb.com/images/media/drink/jgvn7p1582484435.jpg",
        "ingredients": ["Sugar", "Lime", "Cachaca"],
        "measures": ["2 tsp", "1 ", "2 1/2 oz "]
    },
    {
        "name": "Piña Colada",
        "shortDescription": "The piña colada is a sweet cocktail made with rum, cream of coconut or coconut milk, and pineapple juice.",
        "longDescription": "The piña colada is usually served either blended or shaken with ice and it may be garnished with either a pineapple wedge, maraschino cherry, or both. There are two versions of the drink, both originating in Puerto Rico.", 
        "category": "Alcoholic",
        "instructions": "Mix with crushed ice in blender until smooth. Pour into chilled glass, garnish and serve.",
        "cocktailImage": "https://www.thecocktaildb.com/images/media/drink/cpf4j51504371346.jpg",
        "ingredients": ["Light rum", "Coconut milk", "Pineapple"],
        "measures": ["3 oz ", "3 tblsp ", "3 tblsp "]
    },
    {
        "name": "Moscow Mule",
        "shortDescription": "A Moscow mule is a cocktail made with vodka, spicy ginger beer, and lime juice, garnished with a slice or wedge of lime.",
        "longDescription": "The Moscow mule is popularly served in a copper mug, which takes on the cold temperature of the liquid. Some public health advisories recommend copper mugs be plated with nickel or stainless steel on the inside and the lip, but it has been disputed whether the time and acidity involved in the drinking of a Moscow mule would be enough to leach out the 30 milligrams of copper per liter needed to cause copper toxicity.",
        "category": "Alcoholic",
        "instructions": "Combine vodka and ginger beer in a highball glass filled with ice. Add lime juice. Stir gently. Garnish.",
        "cocktailImage": "https://www.thecocktaildb.com/images/media/drink/3pylqc1504370988.jpg",
        "ingredients": ["Vodka", "Lime juice", "Ginger ale"],
        "measures": ["2 oz ", "2 oz ", "8 oz "]
    },
    {
        "name": "Martini",
        "shortDescription": "The martini is a cocktail made with gin and vermouth, and garnished with an olive or a lemon twist. Over the years, the martini has become one of the best-known mixed alcoholic beverages.",
        "longDescription": "The exact origin of the martini is unclear. The name may derive from the Martini brand of vermouth. Another popular theory suggests it evolved from a cocktail called the Martinez served sometime in the early 1860s at the Occidental Hotel in San Francisco, which people frequented before taking an evening ferry to the nearby town of Martinez, California. Alternatively, residents of Martinez say a bartender in their town created the drink, while another source indicates that the drink was named after the town.",
        "category": "Alcoholic",
        "instructions": "Straight: Pour all ingredients into mixing glass with ice cubes. Stir well. Strain in chilled martini cocktail glass. Squeeze oil from lemon peel onto the drink, or garnish with olive.",
        "cocktailImage": "https://www.thecocktaildb.com/images/media/drink/71t8581504353095.jpg",
        "ingredients": ["Gin", "Dry Vermouth", "Olive"],
        "measures": ["1 2/3 oz ", "1/3 oz ", "1"],
    },
    {
        "name": "Cuba Libre",
        "shortDescription": "Rum and Coke, or the Cuba libre, is a highball cocktail consisting of cola, rum, and in many recipes lime juice on ice.",
        "longDescription": "The cocktail originated in the early 20th century in Cuba, after the country won independence in the Spanish–American War. It subsequently became popular across Cuba, the United States, and other countries. Its simple recipe and inexpensive, ubiquitous ingredients have made it one of the world's most-popular alcoholic drinks. Drink critics often consider the drink mediocre, but it has been noted for its historical significance.",
        "category": "Alcoholic",
        "instructions": "Build all ingredients in a Collins glass filled with ice. Garnish with lime wedge.",
        "cocktailImage": "https://www.thecocktaildb.com/images/media/drink/wmkbfj1606853905.jpg",
        "ingredients": ["Light rum", "Lime", "Coca-Cola"],
        "measures": ["2 oz ", "Juice of 1/2 ", "4 oz"],
    },
    {
        "name": "Mimosa",
        "shortDescription": "A mimosa cocktail is composed of champagne (or other sparkling wine) and chilled citrus juice, usually orange juice unless otherwise specified",
        "longDescription": "It’s hard to think about brunch without a mimosa, the two things just go hand-in-hand.  Many brunch spots offer bottomless mimosas or even serve one drink complimentary.  There is just something about the refreshing combination of champagne and orange juice that goes perfectly with a leisurely Sunday brunch.",
        "category": "Alcoholic",
        "instructions": "Ensure both ingredients are well chilled, then mix into the glass. Serve cold.",
        "cocktailImage": "https://www.thecocktaildb.com/images/media/drink/juhcuu1504370685.jpg",
        "ingredients": ["Chilled Champagne", "Orange juice"],
        "measures": ["2 oz ", "2 oz "]
    },
    {
        "name": "Daiquiri",
        "shortDescription": "Daiquiri is a family of cocktails whose main ingredients are rum, citrus juice (typically lime juice), and sugar or other sweetener.",
        "longDescription": "Daiquirí is also the name of a beach and an iron mine near Santiago de Cuba, and is a word of Taíno origin. The drink was supposedly invented by an American mining engineer named Jennings Cox, who was in Cuba at the time of the Spanish–American War.",
        "category": "Alcoholic",
        "instructions": "Pour all ingredients into shaker with ice cubes. Shake well. Strain in chilled cocktail glass.",
        "cocktailImage": "https://www.thecocktaildb.com/images/media/drink/mrz9091589574515.jpg",
        "ingredients": ["Light rum", "Lime", "Powdered sugar"],
        "measures": ["1 1/2 oz ", "Juice of 1/2 ", "1 tsp "]
    },
    {
        "name": "Hot Chocolate to Die for",
        "shortDescription": "Hot chocolate, also known as drinking chocolate and as cocoa, is a heated drink consisting of shaved chocolate, melted chocolate or cocoa powder, heated milk or water, and usually a sweetener.",
        "longDescription": "The first chocolate drink is believed to have been created by the Maya around 2,500–3,000 years ago, and a cocoa drink was an essential part of Aztec culture by 1400 AD. The drink became popular in Europe after being introduced from Mexico in the New World and has undergone multiple changes since then. Until the 19th century, hot chocolate was even used medicinally to treat ailments such as liver and stomach diseases.",
        "category": "Non alcoholic",
        "instructions": "Melt the chocolate, butter and vanilla in a double boiler. When just smooth stir in the cream.",
        "cocktailImage": "https://www.thecocktaildb.com/images/media/drink/0lrmjp1487603166.jpg",
        "ingredients": ["Chocolate", "Butter", "Vanilla extract", "Half-and-half", "Marshmallows"],
        "measures": ["12 oz fine ", "1 tsp ", "1/2 tsp ", "1 cup ", "mini "],
    },
    {
        "name": "Banana Strawberry Shake",
        "shortDescription": "Strawberry Banana milkshake is a yummy and refreshing milkshake. In this recipe, you can modify it by adding more strawberries and bananas as per taste.",
        "longDescription": "When the term milkshake was first used in print in 1885, milkshakes were an alcoholic whiskey drink that has been described as a sturdy, healthful eggnog type of drink, with eggs, whiskey, etc., served as a tonic as well as a treat. However, by 1900, the term referred to wholesome drinks made with chocolate, strawberry, or vanilla syrups. By the early 1900s people were asking for the new treat, often with ice cream.",
        "category": "Non alcoholic",
        "instructions": "Blend all together in a blender until smooth.",
        "cocktailImage": "https://www.thecocktaildb.com/images/media/drink/vqquwx1472720634.jpg",
        "ingredients": ["Strawberries", "Banana", "Yoghurt", "Milk", "Honey"],
        "measures": ["1/2 lb frozen ", "1 frozen ", "1 cup plain ", "1 cup ", "to taste",],
    },
    {
        name: "Kill the cold Smoothie",
        "shortDescription": "",
        "longDescription": "",
        category: "Non alcoholic",
        cocktailImage: "https://www.thecocktaildb.com/images/media/drink/7j1z2e1487603414.jpg",
        ingredients: ["Ginger", "Lemon", "Water",],
        strIngredient2: "Lemon",
        strIngredient3: "Water",
        measures: ["1 inch ", "1/4 ", "1 cup hot "],
    },
    {

    },
    {

    }

];

require("dotenv").config()
const connectDb = require('../bin/db.config')
const Cocktail = require('../models/Cocktail.model')
const mongoose = require("mongoose");
const { db } = require("../models/Cocktail.model");

const dbOptions = {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

async function seedDb() {
    try {
        await mongoose.connect(process.env.MONGODB_URI_PROD, dbOptions) // process.env.MONGODB_URL
        const cocktails = await Cocktail.create(cocktailData)
        console.log('This is your cocktail data!!!!',cocktailData)
        mongoose.connection.close()
    } catch (err) {
        console.log(err)
    }
}

seedDb()