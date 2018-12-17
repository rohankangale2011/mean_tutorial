var mongoose = require('mongoose');
var User = mongoose.model('user');

module.exports = {
    get: function (callback) {
        User.find({}, function (err, result) {
            if (err) throw err;
            callback({
                success: true,
                res: result
            });
        });
    },

    add: function (body, callback) {
        var studs = new User({
            firstname: body.firstname,
            lastname: body.lastname,
            city: body.cityname,
            phone: body.contact
        });

        studs.save(function (err, result) {
            if (err) throw err;

            if (result) {
                callback({
                    success: true,
                    res: result
                });
            }
        });
    }

};