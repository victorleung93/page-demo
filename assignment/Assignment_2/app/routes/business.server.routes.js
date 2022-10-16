module.exports = function(app) {
    var business = require('../controllers/business.server.controllers');
    
    app.get("/business", (req, res) =>{
        res.render('business', {title: "Business Contact List Page"})
    })
};

