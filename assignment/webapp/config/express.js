var config = require('./env/development')
var session = require('express-session');
var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var compress = require('compression');
var methodOverride = require('method-override');
const expressLayouts = require('express-ejs-layouts');

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
 
app.use(session({
    saveUninitialized: true,
    resave: true,
    secret: config.sessionSecret
}));

require('../app/routes/index.server.routes.js')(app);
require('../app/routes/about.server.routes.js')(app);
require('../app/routes/services.server.routes.js')(app);
require('../app/routes/projects.server.routes.js')(app);
require('../app/routes/contact.server.routes.js')(app);

return app;
};

