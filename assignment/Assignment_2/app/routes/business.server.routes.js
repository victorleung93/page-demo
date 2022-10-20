const express   = require('express');
const router    = express.Router();
const mongo     = require('mongodb').MongoClient;;
const assert    = require('assert');
var User                = require('../models/users.server.model');


module.exports = function(app) {
    
    function isLoggedIn(req, res, next){
        if(req.isAuthenticated()) {
            return next();
            
        }else{
            res.redirect('/login');
        }
    }

    app.get("/business", isLoggedIn, (req, res) =>{
        var records = User.find({})
        .then(user =>{
            var contentLength = user.length; 
            res.render('business', {title: "Business Contact List Page", content:user })
        })
        .catch(err =>{
            console.log(err);
        })  
    })
};


