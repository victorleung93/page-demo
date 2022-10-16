module.exports = function(app) {
    var login = require('../controllers/login.server.controllers');
    
    app.use("/login", (req, res) =>{
        res.render('login', {title: "Login Page"})
    })
};