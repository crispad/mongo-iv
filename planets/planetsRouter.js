const express = require("express");

const Planet = require("./Planet.js");

const router = express.Router();

// add endpoints here

router.route("/").get((req, res) => {
  Planet.find({})
    .then(planets => {
      res.status(200).json(planets);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
