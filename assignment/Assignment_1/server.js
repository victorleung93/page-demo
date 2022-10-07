const express = require('./config/express');

var app = express();

const host = 'localhost';
const port = process.env.PORT || "3000";

const indexRoute = require("./app/routes/index.server.routes")

app.listen(port);
console.log(`Server running at http://${host}:${port}/`);