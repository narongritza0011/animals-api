require("dotenv").config();
require("./config/database").connect();
const express = require("express");
const app = express();
const router = require("./routes/index");
app.use(express.json());

//routes  here
app.use("/api/v1/", router);

module.exports = app;
