`use strict`
const apiroutes = require("./routes/api-routes.js")
const express = require("express")
const bodyParser = require("body-parser")

const app = express()

const router = require("./routes/api-routes.js")

const PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json())
app.use("/api", router)

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))