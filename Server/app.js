var express = require('express');
// var services = require('./routes/services');
var app = express();

var bodyParser = require('body-parser');
var db = require('./utils/db');

app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization, Access-Control-Allow-Origin, Access-Control-Allow-Headers');
  next();
});

require("./user/user.route")(app);

app.listen(process.env.PORT || 3002, function() {
    console.log("Listening on port 3002...");
});

module.exports = app;