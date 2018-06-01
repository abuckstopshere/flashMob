`use strict`

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const router = require("./routes/api-routes.js")

const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json())

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
