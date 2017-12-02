var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "PAR/8628490",
    database: "burgers_db"
});

connection.connect(function (err) {

    if (err) {
        console.log("error connecting: " + err.stack);
        return;
    }

    console.log("connected as id: " + connection.threadId);

});

module.exports = connection;