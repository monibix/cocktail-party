require('dotenv').config()
const User = require('../models/User.model')
const bcrypt = require('bcryptjs');
const { find, findByIdAndUpdate } = require('../models/User.model');
const saltRounds = 10;

const signupView = async (req,res) => {
    try {
        res.render('signup')
    } catch (error) {
        console.log('There is an error in the signup view!!', error)
    }
}



// const userCheck = async (req, res, next) => {
//     try {
//         const { email } = req.body;
//         const usersList = await User.findOne({email});
//         res.render()
//     } catch (error) {
//         console.log('There is an error in userCheck!', error)
//     }
// }


const newUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        //Verificar si el email ya existe en la BD
        const verifyEmail = await User.findOne({ email })
        if (verifyEmail) {
            return res.render('signup', {error: "Email already exists"})
        } else {
            const randomString = await bcrypt.genSalt(saltRounds)
            const hashedPassword = await bcrypt.hash(password, randomString)
            const newUser = await User.create({ email, password: hashedPassword })
            console.log("this is the req.session object:",req.session)
            req.session.currentUser = newUser._id;
            res.redirect('/')
            console.log('NEW USER:', newUser)
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
    console.log("CHECKCREDENTIALS:", req.body)
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
            console.log('Incorrect password!!!!!!')
            //return alert("This password is not correct")
            //return res.send('Incorrect password')
            return res.render('login', {error: "Wrong password. Try again !"})
        }
        console.log('USER LOGGED IN IS:', user)

        console.log('req.session.currentUser._id:', req.session.currentUser)
        req.session.currentUser = user._id; //adjuntando una key al objeto session que se llama curerentUser y le pasamos user._id
        console.log('req.session.currentUser._id2:', req.session.currentUser)
        // res.render('user-profile', user)
        return res.redirect(`/auth/user-profile/${req.session.currentUser}`)

        // req.session.currentUser = user._id;
        // res.render('user-profile', user)
      
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
    console.log("reqbody:", req.body)
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

// const favouritesView = async (req, res) => {
//     try {
//         const userFavs = await User.findById(req.session.currentUser._id).populate("favourites")
//         res.render("user-favourites", {userFavs});
//     } catch (error) {
//         console.log('There is an error in favouritesView', error)
//     }
// }

// const updateFavourites = async (req, res) => {
//    const { id } = req.params;
//    const updatedUser = await User.findByIdAndUpdate({_id:req.session.currentUser._id},{ $push : {"favourites" :  id  }})
//    console.log("Favourites: ",updatedUser);
//    res.redirect("/list")
// }


const userProfileView = async (req, res) => {
    try {
        const { id } = req.params
        const apikey = process.env.API_KEY
        const userInfo = await User.findById(id).populate('myCocktails').populate('favourites').lean()
        console.log("userinfo", userInfo)

        res.render('user-profile', {...userInfo, apikey: apikey})
        
    } catch (error) {
        res.send('userprofileview error')
    }  
}

const updateUserProfile = async (req, res) => {
    try {
        const { id } = req.params
        const userImage = req.file && req.file.path
        console.log("user profile:",req.body)
        console.log("IMAGE URL", userImage)
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
        console.log("UPDATEDUSER", updatedUser)
        await User.findByIdAndUpdate(id, updatedUser)

        res.redirect(`/auth/user-profile/${id}`)

    } catch (error) {
        console.log('There is an error in the update user', error)
    }
}

const userProfilePublicView = async (req, res) => { //repasar!!lleva a profile de usuario existente. //no se guarda sesion
    try {                                            
        const currentUserID = req.session.currentUser;
        //await Cocktail.findById(cocktailID)

        const { id:userID } = req.params //recoge id cocktail de la ruta
        const userList = await User.find() //buscar el id del usuario q en su array de myCocktails contenga el id del cocktail en cuestion.
        console.log("userlist", userList)
        //console.log("cocktailID", cocktailID)

        // userList.map(userOwner => {
        //     const userOwns = userOwner.myCocktails.includes(cocktailID)
        //     console.log("currentuserID", currentUserID)
        //     console.log("userowns", userOwns)
        //     console.log("userOwner.myCocktails", userOwner.myCocktails)
        //     if (userOwns) {
        //         const userOwnerID = userOwns._id
        //         return userOwnerID
        //     }
        //     console.log("userownerid", userOwns._id)
        // })
        

        const userInfo = await User.findById(userID).populate('myCocktails favourites')
        const apikey = process.env.API_KEY
        console.log("USERID", userID)
        console.log("USERINFo", userInfo)
        //console.log("currentuserID", currentUserID)
        res.render('user-profile-public', {userID, userInfo, apikey})

        // const cocktailsList = await Cocktail.find({});
        // console.log("this is the cocktails list:", cocktailsList);
        // const cocktails = cocktailsList.map(cocktail => {
        // const isFavourite = favourites.includes(cocktail._id)
        // return {
        //       ...cocktail,
        //       isFavourite
        // }
        // })

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
    userProfileView, //muestra user-profile-view con id usuario
    updateUserProfile, //actualiza info usuario
    //favouritesView,
    //updateFavourites,
    //userCheck, 
    userProfilePublicView,
    chatView
}