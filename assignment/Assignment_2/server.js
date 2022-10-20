process.env.NODE_ENV = process.env.NODE_ENV || 'development'
// Initialize mongoose and express
const express = require('./config/express');
var configMongoose = require('./config/mongoose');

var app = express();
const db = configMongoose();

const host = 'localhost';
const port = process.env.PORT || "3000";

const indexRoute = require("./app/routes/index.server.routes")

app.listen(port);
console.log(`Server running at http://${host}:${port}/`);
module.exports = app; 