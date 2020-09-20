const express = require("express");
const burger = require("../models/burger.js");
const router = express.Router();

router.get("/", function(req, res) {
  burger.selectAll(function(result) {
    // if (err) throw err;
    console.log("Results: ", result);
    res.render("index", { burgers: result }); 
  });
});

module.exports = router;