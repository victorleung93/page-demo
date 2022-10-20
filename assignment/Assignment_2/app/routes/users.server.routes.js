
var userController = require('../controllers/users.server.controllers')

const express = require('express');


module.exports = function(app){
    console.log(" user login page is loading")
    app.post('/login', userController.create).get('/login', userController.list)

    app.get('/login', userController.getLoginPage)
    app.post('/login', userController.loginUser)


    app.get('/register', userController.getRegisterPage)
    app.post('/register', userController.registerUser)

}
