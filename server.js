var express = require("express");

var bodyParser = require("body-parser");

var PORT = process.env.PORT || 3306;

var app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burger_controllers.js");

app.use("/", routes);

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
