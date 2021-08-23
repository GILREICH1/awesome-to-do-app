"use strict";
const express = require("express");
const router = require("./router");
const cors = require("cors");
require("./models/database");

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

module.exports = app;
