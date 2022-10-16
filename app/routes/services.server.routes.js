module.exports = function(app) {
    var services = require('../controllers/services.server.controllers');
    
    app.use("/services", (req, res) =>{
        res.render('services', {title: "Services Page"})
    })
};

