//Create a schema for user
var mongoose = require('mongoose');
var user = new mongoose.Schema({
    firstname: String,
    lastname: String,
    city: String,
    phone: Number
}, { collection: 'user' });

module.exports = mongoose.model('user', user);