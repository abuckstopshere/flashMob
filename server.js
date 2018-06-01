`use strict`

const express = require("express");
const bodyParser = require("body-parser");

var app = express();

var router = require("./routes/api-routes.js")

var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json())

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
