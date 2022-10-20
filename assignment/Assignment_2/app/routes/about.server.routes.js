module.exports = function(app) {
    var about = require('../controllers/about.server.controllers');
    app.get('/about', about.render)

   
};

