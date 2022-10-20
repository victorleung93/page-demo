module.exports = function(app) {
    var registration = require('../controllers/registration.server.controllers');
    
    app.get("/registration", (req, res) =>{
        res.render('registration', {title: "Registration Page"})
    })
};

