module.exports = function(app) {
    var project = require('../controllers/projects.server.controllers');
    
    app.use("/project", (req, res) =>{
        res.render('project', {title: "Projects Page"})
    })

};

