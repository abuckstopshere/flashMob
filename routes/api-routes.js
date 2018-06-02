var orm = require("../config/orm")
const router = require("express").Router();

router
    .get("/yolo", (req, res, next) => {
        res.send("yolo")
    })

    .get("/user", (req, res, next) => {
        console.log(req.params.user)
        res.json(orm.getUserByID(req.params.user))
        // res.send("yolo")
    })
    .get("/user/:id", (req, res, next) => {
        orm.getUserByID(req.params.id)
            .then(data => res.json(data))
        // res.send("yolo2")
    })
    .get("/sets", (req, res, next) => {
        orm.getSetAll(req.params)
            .then(data => res.json(data))
        // res.send("yolo3")
    })
    .get("/sets/:category", (req, res, next) => {
        orm.getSetsByCategory(req.params.category)
            .then(data => res.json(data));
        // res.send("yolo4")
    })
    .post("/sets", (req, res, next) => {
        var userID = (req.params.userID);
        var setName = (req.params.setName);
        var category = (req.params.category);

        orm.createSet(userID, setName, category)
            .then(data => {
                console.log(data);
                return res.json(data)
            })
    })
    .post("/cards", (req, res, next) => {
        var setID = (req.params.userID);
        var cardFront = (req.params.cardFront);
        var cardBack = (req.params.cardBack);
        orm.createCard(setID, cardFront, cardBack)
            .then(data => {
                console.log(data);
                return res.json(data)
            })
    })
module.exports = router;