const mongoose = require('../../config/mongoose')
const User = require('../models/users.server.model')
var jwt = require('jsonwebtoken')
var expressJwt = require('express-jwt')
const passport  = require('passport')
const { application } = require('express')
const bodyParser = require('body-parser')
const passportLocal   = require('passport-local').Strategy;



// Render login page 
exports.render = function(req, res, next){
    res.render('login', {title:'Login Page'});
    
    // Create function to create dummy user in MongoDB
    //no need to create since it can be link with MongoDB
    /*
    let victor = new User({
        firstname: 'Ching Yiu',
        lastname: 'Leung',
        email: 'victorleung93@gmail.com',
        username: 'Victorleung',
        password: '123456'
    });

    var user = new User(victor)
    user = user.save()
    users.push(victor)
    */
    
};

















// Create function to create dummy user in MongoDB
/*
exports.create = async function (req, res, next){
    console.log("user creating");
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


// Process Login of User
//exports.loginUser = async (req, res, next) => {
exports.loginUser = function(req, res, next){
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
*/