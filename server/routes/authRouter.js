const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.post("/login", (req, res, next) => {
  console.log("hit the route");
});

module.exports = router;