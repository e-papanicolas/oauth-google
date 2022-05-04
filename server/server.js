const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const errors = require("./errorHandler");
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;
const authRouter = require("./routes/authRouter");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/auth", authRouter);
app.use(errors.errorHandler);

mongoose.connect(MONGODB_URI);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", () => console.log("connected to mongoDB"));

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
