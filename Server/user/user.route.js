var userService = require("./user.service");

module.exports = function (app) {
    app.get('/', function (req, res) {
        res.send('Welcome to node express');
    });

    /**
     * Function returning user's details
     */
    app.get('/get', function (req, res) {
        userService.getData(function (results) {
            res.json(results);
        });
    });

    /**
     * Function adding/creating a new user
     */
    app.post('/add', function (req, res) {
        userService.addData(req.body, function (results) {
            res.json(results);
        });
    });

    app.post('/webhook', function(req,res) {
        console.log('REQ:', req);
        res.json({ success: true, message: 'Webhook response success' });
    });

}