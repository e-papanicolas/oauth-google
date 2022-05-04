const express = require("express");
const router = express.Router();
const User = require("../models/user");
const authenticate = require("../middleware/oauth2");

router.post("/login", (req, res, next) => {
  authenticate();
});

module.exports = router;
