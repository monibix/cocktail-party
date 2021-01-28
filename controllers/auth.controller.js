require('dotenv').config()
const User = require('../models/User.model')
const bcrypt = require('bcryptjs');
//const { find, findByIdAndUpdate } = require('../models/User.model');
const saltRounds = 10;

const signupView = async (req,res) => {
    try {
        res.render('signup')
    } catch (error) {
        console.log('There is an error in the signup view!!', error)
    }
}

const newUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const verifyEmail = await User.findOne({ email })
        if (verifyEmail) {
            return res.render('signup', {error: "Email already exists"})
        } else {
            const randomString = await bcrypt.genSalt(saltRounds)
            const hashedPassword = await bcrypt.hash(password, randomString)
            const newUser = await User.create({ email, password: hashedPassword })
            req.session.currentUser = newUser._id;
            res.redirect('/')
        }
    } catch (err) {
        console.log('There is an error:', err)
    }
}

const loginView = async (req,res) => {
    try {
        res.render('login')
    } catch (error) {
        console.log('There is an error in the login view!!', error)
    }
}

const checkCredentials = (req, res, next) => {
    const { email, password } = req.body;
    const hasMissingCredential = !email || !password;
    if (hasMissingCredential) {
        return res.send("All fields are mandatory");
    }
    next();
};

const login = async (req, res) => {
    try {
        const {email, password} = req.body
        const user = await User.findOne({ email }).lean()
        if (!user) {
            return res.render('login', {error: "User does not exist. Try signing up!"})
        }
        const verifyPassword = await bcrypt.compare(password, user.password)
        if (!verifyPassword) {
            return res.render('login', {error: "Wrong password. Try again !"})
        }
        req.session.currentUser = user._id; //adjuntando una key al objeto session que se llama curerentUser y le pasamos user._id
        return res.redirect(`/auth/user-profile/${req.session.currentUser}`)
    } catch (err) {
        console.log('Error Here!!!!!',err)
    }
}

const logout = (req,res)=> {
    req.session.destroy()
    res.redirect('/')
}

const logInCheck = (req, res, next) => {
    if (!req.session.currentUser) {
        res.send('You are not logged in!')
    }
    next()
}

const logInCheckEmpieza = (req, res, next) => {
    if (!req.session.currentUser) {
        const ruta = '/auth/signup'
        res.render(ruta)
    } else {
        res.render('auth/user-profile' )
    }
}

const userProfileView = async (req, res) => {
    try {
        const { id } = req.params
        const apikey = process.env.API_KEY
        const userInfo = await User.findById(id).populate('myCocktails').populate('favourites').lean()
        res.render('user-profile', {...userInfo, apikey: apikey})
    } catch (error) {
        res.send('userprofileview error')
    }  
}

const updateUserProfile = async (req, res) => {
    try {
        const { id } = req.params
        const userImage = req.file && req.file.path
        let updatedUser= {}
        if (userImage) {
            updatedUser = {
                ...req.body,
                userImage
            }
        } else {
            updatedUser = {
                ...req.body
            }
        }
        await User.findByIdAndUpdate(id, updatedUser)
        res.redirect(`/auth/user-profile/${id}`)
    } catch (error) {
        console.log('There is an error in the update user', error)
    }
}

const userProfilePublicView = async (req, res) => { //repasar!!lleva a profile de usuario existente. //no se guarda sesion
    try {                                            
        const currentUserID = req.session.currentUser;
        const { id:userID } = req.params //recoge id cocktail de la ruta
        const userList = await User.find() //buscar el id del usuario q en su array de myCocktails contenga el id del cocktail en cuestion.
        const userInfo = await User.findById(userID).populate('myCocktails favourites')
        const apikey = process.env.API_KEY
        res.render('user-profile-public', {userID, userInfo, apikey})
    } catch (error) {
        console.log("Error in userProfilePublicView", error)
    }
}

const chatView = async (req, res) => {
    try {
        res.render("chat")
    } catch (error) {
        console.log("Error in chatView", error)
    }
}

module.exports = {
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
    userProfilePublicView,
    chatView
}