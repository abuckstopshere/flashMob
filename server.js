const log = console.log
const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const routes = require("./routes/api-routes.js")

app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())

app.get('/api/hello', (req, res) => {
    res.send({ express: 'Hello From Express' })
  })

app.listen(process.env.PORT || 3000)
log(`magic happening out there..`)