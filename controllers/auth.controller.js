const User = require('../models/User.model')
const bcrypt = require('bcryptjs')
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
        const randomString = await bcrypt.genSalt(saltRounds)
        const hashedPassword = await bcrypt.hash(password, randomString)
        const newUser = await User.create({ email, password: hashedPassword })
        req.session.currentUser = user._id;
        res.redirect('/')
        console.log('NEW USER:', newUser)
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
    const { email, password} = req.body;
    const hasMissingCredential = !email || !password;
    if (hasMissingCredential) {
      return res.send("All fields are mandatory");
    }
    next();
};

const login = async (req, res) => {
    try {
        const {email, password} = req.body
        const user = await User.findOne({ email })
        if (!user) {
            console.log('User does not exist!!!!!!')
            return res.send('User does not exist')
        }
    
        const verifyPassword = await bcrypt.compare(password, user.password)
        if (!verifyPassword) {
            console.log('Incorrect password!!!!!!')
            return res.send('Incorrect password')
        }
        console.log('USER IS:', user)
        req.session.currentUser = user._id;
        res.redirect('/')
    } catch (err) {
        console.log('Error Here!!!!!',err)
    }
}

const logout = (req,res)=> {
    req.session.destroy()
    console.log('logged out!!!!')
    res.redirect('/')
}

const logInCheck = (req, res, next) => {
    if (!req.session.currentUser) {
        res.send('You are not logged in!')
    }
    next()
}

module.exports = {
    signupView,
    loginView,
    newUser,
    checkCredentials,
    login,
    logout,
    logInCheck
}