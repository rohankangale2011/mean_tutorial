var mongoose = require('mongoose');
var appConfig = require('../config/app-config');

mongoose.connect(appConfig.db_url);

// when successfully connected
mongoose.connection.on('connected', function () {
  console.log('Mongoose default connection open to ' + appConfig.db_url);
});

// when connection throws an error
mongoose.connection.on('error',function (err) {
  console.log('Mongoose default connection error: ' + err);
});

// when connection is disconnected
mongoose.connection.on('disconnected', function () {
  console.log('Mongoose default connection disconnected');
});

// close the Mongoose connection when node process ends
process.on('SIGINT', function() {
  mongoose.connection.close(function () {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});

// bringing schemas in
require('../user/user.schema');