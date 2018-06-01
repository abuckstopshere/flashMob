var orm = require("../config/orm")

// Routes
// =============================================================
module.exports = function (app) {

    // GET route for getting all of the todos
    app.get("/api/User/:ID", function (req, res) {
        orm.getUserByID(req.params)
            .then(((fulfilled) => {
                console.log(fulfilled)
            }));
    });

    app.get("/api/Sets/:authorID", function (req, res) {
        orm.getSetByAuthor(req.params)
            .then(user => res.json(results));
    });

    app.get("/api/Sets/:categories", function (req, res) {
        orm.getSetsByCategory(req.params)
            .then(data => res.json(results));
    });
    app.get("/api/Sets", function (req, res) {
        orm.getSetAll(req.params)
            .then(data => res.json(results));

    });
    app.get("/Sets/:setID/Card/:cardID", function (req, res) {
        orm.getCardsBySet(req.params)
            .then(data => res.json(results));
    });


    // POST route for saving a user. We can create a user using the data on req.body
    app.post("/User/", function (req, res) {
        orm.createUser(req.params)
            .then(user => res.json(results));
    });

    app.post("/Card/:front", function (req, res) {
        orm.createCard(req.params)
            .then(user => res.json(results));
    });

    app.post("/Card/:back", function (req, res) {
        orm.createCard(req.params)
            .then(user => res.json(results));
    });


    app.post("/User/:id", function (req, res) {
        orm.createSet(req.params)
            .then(user => res.json(results));
    });


    // DELETE route for deleting todos. We can access the ID of the todo to delete in
    // req.params.id
    app.delete("/User/:userID", function (req, res) {
        orm.deleteUser(req.params)
            .then(user => res.json(results));
    });

    app.delete("/Sets/:setName", function (req, res) {
        orm.deleteSet(req.params)
            .then(user => res.json(results));
    });

    app.delete("/Sets/:setID/Card/:cardID/:front", function (req, res) {
        orm.deleteCardByID(req.params)
            .then(user => res.json(results));
    });

    app.delete("/Sets/:setID/Card/:cardID/:back", function (req, res) {
        orm.deleteCardByID(req.params)
            .then(user => res.json(results));
    });



    // PUT route for updating todos. We can access the updated todo in req.body
    app.put("/User/:email", function (req, res) {
        orm.changeUserEmail(req.params)
            .then(user => res.json(results));
    });


    app.put("/Set/:setID/Card/:cardID", function (req, res) {
        orm.updateCardSet(req.params)
            .then(user => res.json(results));
    });


    app.put("/Card/:userID", function (req, res) {
        orm.updateCardFields(req.params)
            .then(user => res.json(results));
    });



    app.get("/User/:ID", function (req, res) {
        orm.getUserID(req.params)
            .then(data => res.json(results));
    });


    // DELETE route for deleting todos. We can access the ID of the todo to delete in
    // req.params.id
    app.delete("/api/:userID", function (req, res) {
        orm.deleteUser(req.params)
            .then(data => res.json(results));
    });

    app.delete("/api/:userID", function (req, res) {
        orm.deleteUser(req.params)
            .then(data => res.json(results));
    });


    // PUT route for updating todos. We can access the updated todo in req.body
    app.put("/api/:userID", function (req, res) {
        orm.changeUserEmail(req.params)
            .then(data => res.json(results));
    });

};
