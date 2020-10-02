const express = require("express");
const burger = require("../models/burger.js");
const router = express.Router();
const orm = require("../config/orm.js");

router.get("/", function(req, res) {
  orm.selectAll(function(burgers) {
    // if (err) throw err;
    console.log("Results: ", burgers);
    res.render("index", { burgers }); 
  });
});

router.post("/add", function(req, res) {
  const burgerName = req.body.burger_name;
  orm.insertOne(name, function(err, res) {
    if (err) throw err;
    return res.json({
      burger_name: burgerName
    });
  });
});

module.exports = router;