var userDAO = require("./user.dao");

module.exports = {
    getData: function (callback) {
        userDAO.get(callback);
    },

    addData: function (body, callback) {
        userDAO.add(body, callback);
    }

};