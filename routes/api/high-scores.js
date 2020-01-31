const express = require("express");
const router = express.Router();

// Load Game model
const HighScores = require("../../models/HighScores");

router.post("/", (req, res) => {
  console.log(">>>", req.body);
  HighScores.create(req.body).then(highScore => {
    res.json(highScore);
  });
});

router.get("/", (req, res) => {
  HighScores.find({}).then(highScores => {
    res.json({ highScores });
  });
});

module.exports = router;
