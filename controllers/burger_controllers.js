var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

// API and HTML Request routes

router.get("/", function (req, res) {

    burger.show(function (data) {

        var dat1 = {
            burgerData: data
        };

        res.render("index", dat1);

    });

});

router.post("/create", function (req, res) {

    burger.add(req.body.item, function (data) {

        res, redirect('/');

    });

});

router.post("/update/:id", function (req, res) {

    burger.eat(req.body.item, function (data) {

        res.redirect('/');

    });

});

module.exports = router;