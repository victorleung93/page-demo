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
             
            res.render('business', {title: "Business Contact List Page", content:user })
        })
        .catch(err =>{
            console.log(err);
        })  
    })
};


