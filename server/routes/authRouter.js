const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.post("/login", (req, res, next) => {
  console.log(req.body);
  console.log("hit the route");
  res.json("hit the route");
});

module.exports = router;
