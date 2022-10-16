module.exports = function(app) {
    var index = require('../controllers/index.server.controllers');
        
    app.get("/index", (req, res) =>{
        res.render('index', {title: "Home Page"})
    })
    app.get("/", (req, res) =>{
        res.render('index', {title: "Home Page"})
    })
}
