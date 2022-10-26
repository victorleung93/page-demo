module.exports = function(app) {
    var update  = require('../controllers/update.server.controllers.js');
    var axios   = require('axios');
    var User                = require('../models/users.server.model');

    app.get("/update", (req, res) =>{
        var id = req.query.id;
        if(id == undefined){
            res.redirect('/business');
        }else{
            User.findOne({_id : id})       
            .then(function(user){
                
                res.render('update', {title: "Update Page", content:user })
            })
            .catch(err =>{
                res.send(err);
            })
        }
    })

    app.post("/api/update", async (req, res)=>{
        var id = req.headers.id;
        var { phone, email, username} = req.body;
        
        try {
            const updateInfo = await User.updateOne({_id:id}, {
                $set:{
                    phone : phone,
                    email : email,
                    username : username
                }});
            console.log("updated");
            
        } catch (error) {
            console.log(error);
        }
        res.json({status: "ok"});
    })
};

