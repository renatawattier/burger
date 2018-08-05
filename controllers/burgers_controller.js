var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.all(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index.handlebars", hbsObject);
    });
});

router.post("/", function(req, res) {
    // console.log(req.body);
    var burgerName = req.body.burger;
    burger.create("burger_name, devoured", "'" + burgerName + "'," + false, function() {
        res.end();
    });
});

router.put("/", function(req, res) {
    var id = req.body.id
    // console.log(id);
    burger.update("devoured", true, "id", id, function() {
        res.end();
    });
});

module.exports = router;