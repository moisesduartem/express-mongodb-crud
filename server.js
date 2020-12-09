const mongoose = require("mongoose");
const express = require("express");
const requireDir = require("require-dir");

const app = express();

mongoose.connect(
    "mongodb://localhost:27017/nodeapi", 
    { useNewUrlParser: true }
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


requireDir("./src/models");
app.use("/api", require("./src/routes"));

app.listen(3001);
