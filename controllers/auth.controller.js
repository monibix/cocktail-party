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
        console.log(req.session)
        req.session.currentUser = newUser._id;
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
        const user = await User.findOne({ email })
        if (!user) {
            console.log('User does not exist!!!!!!')
            return res.send('User does not exist')
        }
    
        const verifyPassword = await bcrypt.compare(password, user.password)
        if (!verifyPassword) {
            console.log('Incorrect password!!!!!!')
            //return alert("This password is not correct")
            //return res.send('Incorrect password')
            return res.render('login', {error: "Password Incorrect"})
        }
        console.log('USER LOGGED IN IS:', user)
        req.session.currentUser = user._id;
        res.render('user-profile', user )
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

        const userInfo = await User.findById(id)
        console.log("userinfo", userInfo)
        res.render('user-profile', userInfo)
        
    } catch (error) {
        res.send('userprofileview error')
        
    }
}

const updateUserProfile = async (req, res) => {
    try {
        const { id } = req.params
        const { username, about, phone, address } = req.body
        const imageUrl = req.file && req.file.path
        console.log("user profile:",req.body)
        const updatedUser = {username: username, 
                        about: about, 
                        phone: phone, 
                        address: address, 
                        userImage: imageUrl
        }
        console.log("UPDATEDUSER", updatedUser)
        await User.findByIdAndUpdate(id, updatedUser)

        res.redirect(`/auth/user-profile/${id}`)

    } catch (error) {
        console.log('There is an error in the updateCocktail', error)
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
    userProfileView, //muestra user-profile-view con id usuario
    updateUserProfile, //actualiza info usuario
}