module.exports = function(app) {
    var about = require('../controllers/about.server.controllers');
    
    app.get("/about", (req, res) =>{
        res.render('about', {title: "About Me Page"})
    })
};

