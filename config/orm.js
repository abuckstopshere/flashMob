var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/flashmob_db";
const dbName = 'flashmob_db'

module.exports = orm = {
    // User CRUD
    // Create

    /*
    User model
    User:
    ID: integer
    Sets: JSON object(s)
    familyName: string
    givenName: string
    sets: [array of ints that match setIDs]
    starredSets: [array of setIDs the user has starred or saved]
    email: string (validate me for an @, length, and a .something)
    authKey: (whats returned from login)
    */
    createUser: (familyName, givenName, email, auth, cb) => {
        var myobj = {
            familyName: familyName,
            givenName: givenName,
            email: email,
            authKey: auth
        };

        // Validation to ensure that we don't create a user with duplicate email
        let query = {
            email: email
        }
        let search = getOne(query, "USERS", (err, res) => {
            console.log("CreateUser: Validation search initiated ")
            console.log(res)
            console.log("CreateUser: Validation search ended")
            if (!res) {
                createRecord(myobj, "USERS", cb)
            } else {
                console.log("CreateUser: There was an attempt to create a user, failed: email already exists")
                return "CreateUser: Did not create record, email already exists"
            }
        })


        // console.log(createRecord(myobj, "USERS"))
        // createRecord(myobj, "USERS", cb)
    },

    getUserByID: (userID, cb) => {
        let query = {
            "_id": userID
        }

        getOne(query, "USERS", cb)

    },

    changeUserEmail: (userID, newEmail, cb) => {

        let query = {
            "_id": userID
        }

        let updateArg = {
            email: newEmail,
            updated_at: Date.now()
        }

        updateEntry(query, {
            $set: updateArg
        }, "USERS", cb)
    },

    deleteUser: (userID, cb) => {
        let myquery = {
            "_id": userID
        }

        deleteEntry(myquery, "USERS", cb)
    },
    // Set CRUD
    // CREATE
    createSet: (userID, setName, categories) => {

    },

    // READ
    getSetByAuthor: (userID) => {

    },

    getSetsByCategory: (category) => {

    },

    getSetAll: () => {

    },

    // UPDATE
    addSetCategory: (setID, newCategory) => {

    },

    deleteSet: (setID) => {

        deleteEntry(setID)

    },
    // Card CRUD
    // CREATE
    createCard: (setID, cardFront, cardBack) => {

    },
    // READ
    getCardsBySet: (setID) => {

    },
    // UPDATE
    updateCardFields: (cardID, newFront, newBack) => {

    },
    updateCardSet: (cardID, setID) => {

    },

    // DELETE
    deleteCardByID: (cardID) => {

    },
}


// Helper function. Inserts one object into desired 
function createRecord(obj, cnName, cb) {

    obj.created_at = Date.now()
    obj.updated_at = Date.now()

    MongoClient.connect(url, function (err, client) {
        if (err) {
            throw err
        }
        const db = client.db(dbName);
        const collection = db.collection(cnName)

        collection.insertOne(obj, (err, res) => {
            if (err) {
                console.log("createRecord: Error at create user function: " + err)
            }
            console.log("createRecord: Created one record")
            client.close();
            cb(err, res)
        });
    });
}

function getOne(query, cnName, cb) {

    MongoClient.connect(url, function (err, client) {
        if (err) {
            throw err
        }
        const db = client.db(dbName);
        const collection = db.collection(cnName)
        collection.find(query).toArray(function (err, res) {
            // console.log(res);
            console.log("getOne: One record retrieved")
            client.close();
            cb(err, res[0])
        });
    })
}

function updateEntry(query, updateData, cnName, cb) {
    MongoClient.connect(url, function (err, client) {
        if (err) {
            throw err
        }
        const db = client.db(dbName)
        const collection = db.collection(cnName)
        collection.updateOne(query, updateData, function (err, res) {
            // console.log(res)
            console.log("updateEntry: One record updated")
            client.close()
            cb(err, res)
        })
    })
}

function deleteEntry(myquery, cnName, cb) {
    MongoClient.connect(url, (err, client) => {
        if (err) throw err
        const db = client.db(dbName)
        const collection = db.collection(cnName)
        collection.deleteOne(myquery, function (err, res) {
            if (err) throw err;
            console.log("1 document deleted");
            client.close();
            cb(err, res)
        });
    })
}