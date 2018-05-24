const express = require("express");
const bodyParser = require("body-parser");

var app = express();

var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.get('/api/hello', (req, res) =>{
    res.send({ express: 'Hello From Express' });
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
