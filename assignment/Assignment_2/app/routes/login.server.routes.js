var userController = require('../controllers/login.server.controllers')
const passport          = require('passport');
module.exports = function(app) {
    var login = require('../controllers/login.server.controllers');
    app.get('/login', userController.render)
    
    app.post('/login', passport.authenticate('local', {
        successRedirect: '/business',
        failureRedirect: '/login'
    }));
    
    
};