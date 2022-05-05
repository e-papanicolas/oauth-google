const express = require("express");
const router = express.Router();
const User = require("../models/user");
const main = require("../middleware/oauth2");

router.post("/login", (req, res, next) => {
  console.log("in login route");
  main();
});

router.get("/redirect", (req, res, next) => {
  console.log("in callback");
  console.log(res.body);
  // resolve something here that triggers the server in oauth func
  console.log(req.body);
});

module.exports = router;
