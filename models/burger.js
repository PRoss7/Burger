var orm = require("../config/orm.js");

var burger = {

    show: function (cb) {

        orm.selectBurgers("tableName", function (res) {

            cb(res);

        });

    },

    add: function (burgerName, cb) {

        orm.addBurger(burgerName, function (res) {

            cb(res);

        });

    },

    eat: function (id, cb) {

        orm.eatBurger(id, function (res) {

            cb(res);

        });

    }
};

module.exports = burger;