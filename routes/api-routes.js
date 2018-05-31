var orm = require("../config/orm");

// Routes
// =============================================================
module.exports = function (app) {

    // GET route for getting all of the todos
    app.get("/Dashboard/User/:ID", function (req, res) {
        orm.getUserID(req.body, function (results) {
            res.json(results);
        });
    });
    app.get("/Dashboard/User/:Sets", function (req, res) {
        orm.getSetByAuthor(req.body, function (results) {
            res.json(results);
        });
    });
    app.get("/Set/:categories", function (req, res) {
        orm.getSetsByCategory(req.body, function (results) {
            res.json(results);
        });
    });
    app.get(/Sets/, function (req, res) {
        orm.getSetAll(req.body, function (results) {
            res.json(results);
        });
    });
    app.get("/Sets/:setID/Card/:cardID", function (req, res) {
        orm.getCardsBySet(req.body, function (results) {
            res.json(results);
        });
    });

    // POST route for saving a new todo. We can create a todo using the data on req.body
    app.post("/User/", function (req, res) {
        orm.createUser(req.body, function (results) {
            res.json(results);
        });
    });

    // DELETE route for deleting todos. We can access the ID of the todo to delete in
    // req.params.id
    app.delete("/User/:userID", function (req, res) {
        orm.deleteUser(req.params.userID, function (results) {
            res.json(results);
        });
    });
    app.delete("/Sets/:setName", function (req, res) {
        orm.deleteSet(req.params.userID, function (results) {
            res.json(results);
        });
    });
    app.delete("/Sets/:setID/Card/:cardID/:front", function (req, res) {
        orm.deleteCardByID(req.params.userID, function (results) {
            res.json(results);
        });
    });
    app.delete("/Sets/:setID/Card/:cardID/:back", function (req, res) {
        orm.deleteCardByID(req.params.userID, function (results) {
            res.json(results);
        });
    });


    // PUT route for updating todos. We can access the updated todo in req.body
    app.put("/User/:email", function (req, res) {
        orm.changeUserEmail(req.params, function (results) {
            res.json(results);
        });
    });

app.put("/Set/:setID/Card/:cardID", function (req, res) {
    orm.updateCardSet(req.params.userID, function (results) {
        res.json(results);
    });
});

app.put("/Card/:userID", function (req, res) {
    orm.updateCardFields(req.params.userID, function (results) {
        res.json(results);
    });
});


app.get("/User/:ID", function (req, res) {
        orm.getUserID(req.body, function (results) {
            res.json(results);
        });
    });

    // POST route for saving a new todo. We can create a todo using the data on req.body
app.post("/User/", function (req, res) {
        orm.createRecord(req.body, function (results) {
            res.json(results);
        });
    });

app.post("/Card/:front", function (req, res) {
        orm.createCard(req.body, function (results) {
            res.json(results);
        });
    });
app.post("/Card/:back", function (req, res) {
        orm.createCard(req.body, function (results) {
            res.json(results);
        });
    });

app.post("/User/:id", function (req, res) {
        orm.createSet(req.body, function (results) {
            res.json(results);
        });
    }); 

    // DELETE route for deleting todos. We can access the ID of the todo to delete in
    // req.params.id
app.delete("/api/:userID", function (req, res) {
        orm.deleteUser(req.params.userID, function (results) {
            res.json(results);
        });
    }); 
app.delete("/api/:userID", function (req, res) {
        orm.deleteUser(req.params.userID, function (results) {
            res.json(results);
        });
    });

    // PUT route for updating todos. We can access the updated todo in req.body
app.put("/api/:userID", function (req, res) {
        orm.changeUserEmail(req.params.userID, function (results) {
            res.json(results);
        });
    });
};