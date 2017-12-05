var connection = require("../config/connection.js");

connection.connect(function (err) {

    if (err) {
        console.log("error connecting: " + err.stack);
        return;
    }

    console.log("connected as id: " + connection.threadId);

});

var orm = {

    addBurger: function (burger, cb) {

        var burgerName = burger;
        var queryString = "INSERT INTO burgers (burger_name) VALUES ('" + burgerName + "') " + tableInput + ";";
        connection.query(queryString, function (err, result) {

            if (err) {
                throw err;
            }

            cb(result);

        });

    },

    eatBurger: function (id, cb) {

        connection.query("UPDATE burgers SET devoured = 1 WHERE id = ?", [id], function (err, result) {

            if (err) {
                throw err;
            }

            cb(result);

        });

    },

    showBurgers: function (tableName, cb) {

        connection.query("SELECT * FROM burgers", function (err, result) {

            if (err) {
                throw err;
            }

            cb(result);

        });

    }

};

module.exports = orm;