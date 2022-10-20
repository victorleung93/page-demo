const mongoose = require('../../config/mongoose')
const User = require('../models/users.server.model')
var jwt = require('jsonwebtoken')
var expressJwt = require('express-jwt')
const passport  = require('passport')


// Create function to create dummy user in MongoDB
exports.create = async function (req, res, next){
    console.log("user created");
    let victor = new User({
        firstname: 'Ching Yiu',
        lastname: 'Leung',
        email: 'victorleung93@gmail.com',
        username: 'Victorleung',
        password: 'password'
    });

    const user = new User(victor)
    user.save((err) => {
        if (err) {
            console.log('no');
            return next(err)
        } else {
            user = user.save()
            console.log('yes');
            res.status(200).json(user);
        }
    })
}

exports.list = async function (req, res, next){
    console.log("list loaded");
    await User.find({}, (err, users) =>{
        if(err){
            return next(err)
        } else{
            res.status(200).json(users)
            console.log('On list')
        }
    })
}

// Render login page 
exports.getLoginPage = (req, res, next) => {
    console.log("login page loaded");
    if (!req.user) {
        res.render('/login', {
            title: 'Login',
            // alert: 'User Does Not Exist',
            displayName: req.user ? req.user.displayName : ''
        })
    } else {
        res.redirect('/')
    }
}

// Process Login of User
exports.loginUser = async (req, res, next) => {
    console.log("user try login");
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            return next(err)
        }

        if (!user) {
            console.log('Authentication Error')
            res.redirect('/login')
        }

        req.login(user, (err) => {
            if (err) {
                return next(Err)
            }
            res.redirect('/')
        })
    })(req, res, next)
}

// Render Registration page
exports.getRegisterPage = (req, res, next) => {
    if (!req.user) {
        res.render('users/register', {
            title: 'Register',
            displayName: req.user ? req.user.displayName : '',
            user: req.user,
            req: req
        })
    } else {
        res.redirect('users/register', { user: req.user })
    }
}

// Process User Registration
exports.registerUser = async (req, res, next) => {
    let newUser = new User({
        username: req.body.username,
        // password: req.body.password,
        email: req.body.email,
        displayName: req.body.displayName
    })

    User.register(newUser, req.body.password, (err) => {
        if (err) {
            console.log('Error: Inserting New User')

            if (err.name == "UserExistsError") {
                console.log('User Already Exists')
            }

            res.render('users/register', {
                title: 'Register',
                displayName: req.user ? req.user.displayName : ''
            })
        } else {
            passport.authenticate('local')(req, res, () => {
                res.redirect('/')
            })
        }
    })
}

exports.logout = (req, res, next) => {
    req.logout()
    req.redirect('/')
}