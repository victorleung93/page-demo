const config            = require('./env/development')
const session           = require('express-session');
const express           = require('express');
const morgan            = require('morgan');
const bodyParser        = require('body-parser');
const compress          = require('compression');
const methodOverride    = require('method-override');
const expressLayouts    = require('express-ejs-layouts');
const bcrypt            = require('bcryptjs');
const passport          = require('passport');
const localStrategy     = require('passport-local').Strategy;
var User                = require('../app/models/users.server.model')
//connecting to mongodb
const mongoose          = require('mongoose');
const mongo             = require("mongodb").MongoClient;
const assert = require('assert');
const url               = config.db;
const router = express.Router();



module.exports = function() {
    var app = express();

    //setting up layout 
    app.use(express.static('public'))
    app.use('/css', express.static(__dirname + 'public/css'));
    app.use('/js', express.static(__dirname + 'public/js'));
    app.use('/img', express.static(__dirname + 'public/img'));

    app.use(expressLayouts);
    app.set('view engine', 'ejs');
    app.set('layout','./layouts/default')



    if (process.env.NODE_ENV === 'development'){
        app.use(morgan('dev'));

    }else if (process.env.NODE_ENV === 'production'){
        app.use(compress());
    }

    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    app.use(methodOverride());
    app.use(express.urlencoded({ extended : false}))
    app.use(session({
        saveUninitialized: true,
        resave: true,
        secret: config.sessionSecret
    }));


    // Initialize passport 
    app.use(passport.initialize());
    app.use(passport.session())

    // Serialize and Deserialize User info
   
    passport.serializeUser(function (user, serialize){
        serialize(null, user.id)
    })
    passport.deserializeUser(function (id, deserialize){
        User.findById(id, function (err, user){
            deserialize(err, user);
        });
    });

   //using passport to authenticate user to login
    passport.use(new localStrategy(function (username, password, done){
        User.findOne({username:username}, function(err, user){
            if (err) return done(err);
            if (!user) return done(null, false), 
                {message: 'Incorrect username' },
                console.log('Incorrect username');
            bcrypt.compare(password, user.password, function (err, res){
                if(err)
                    return done(err);
                if(res === false) 
                    return done(null, false, {message: "Incorrect password"}, console.log('Incorrect password!'))
                
                return done(null, user, console.log('login successful!!'));
            });
        });
    }));
   
    app.post('/login', passport.authenticate('local', {
        successRedirect: '/business',
        failureRedirect: '/login'
    }));
    
    //register function
    app.post('/api/register', async (req, res)=>{
        //getting register info
        var { firstname, lastname, phone, email, username, password} = req.body;
        
        if(!username || typeof username !== 'string'){
            return res.json({status: 'error', error: 'Invalid username'})
        }

        //encrypt password
        password = await bcrypt.hash(password, 10);
        
        try{
            const res1 = await User.create({
                firstname, lastname, phone, email, username, password
            })
            console.log("User created as: " + res1);
        }catch (error){
            if(error.code === 11000){
                console.log("duplicated");
                return res.json({status: "error", error: "duplicated"})
            }throw error        
        }

        res.json({status: "ok"})
    })
    //get data from mongodb

    app.get('api/getData', async (req, res)=>{
        console.log("1231312");
        var records = await User.find({})
        .then(user =>{
            res.send(user)
            console.log(records);
        })
        .catch(err =>{
            res.status(400).send({message: err.message})
        })
    })




    require('../app/routes/index.server.routes.js')(app);
    require('../app/routes/about.server.routes.js')(app);
    require('../app/routes/services.server.routes.js')(app);
    require('../app/routes/projects.server.routes.js')(app);
    require('../app/routes/contact.server.routes.js')(app);
    require('../app/routes/login.server.routes.js')(app);
    require('../app/routes/business.server.routes.js')(app);
    require('../app/routes/Registration.server.routes.js')(app);

    return app;
};

