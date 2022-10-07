module.exports = function(app) {
    var contact = require('../controllers/contact.server.controllers');

    app.use("/contact", (req, res) =>{
        res.render('contact', {title: "Contact Page"})
    })
};

