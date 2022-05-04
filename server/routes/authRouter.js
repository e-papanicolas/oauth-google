const express = require("express");
const router = express.Router();
const User = require("../models/user");
const { main, createServer } = require("../middleware/oauth2");

router.post("/login", (req, res, next) => {
  main();
});

router.get("/redirect", (req, res, next) => {
  console.log("in callback");
  createServer();
});

module.exports = router;
