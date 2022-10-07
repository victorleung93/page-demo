module.exports = function(app) {
    var index = require('../controllers/index.server.controllers');
        
    app.get("/index", (req, res) =>{
        res.render('index', {title: "Home Page"})
    })
    app.get("/", (req, res) =>{
        res.render('index', {title: "Home Page"})
    })
    
    /*
    
    app.get("/about", (req, res) =>{
        res.render('about', {title: "About Me Page"})
    })

    app.use("/project", (req, res) =>{
        res.render('project', {title: "Projects Page"})
    })

    app.use("/services", (req, res) =>{
        res.render('services', {title: "Services Page"})
    })

    app.use("/contact", (req, res) =>{
        res.render('contact', {title: "Contact Page"})
    })
    */

    };

