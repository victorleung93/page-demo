module.exports = function(app) {
    var update = require('../controllers/update.server.controllers');
    
    app.get("/update", (req, res) =>{
        res.render('update', {title: "Update Page"})
    })
};

