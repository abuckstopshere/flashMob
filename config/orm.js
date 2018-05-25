var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/flashmob_db";
const dbName = 'flashmob_db';

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
    createUser: (familyName, givenName, email, auth) => {
        var myobj = {
            familyName: familyName,
            givenName: givenName,
            email: email,
            authKey: auth
        };
        let query = {
            email: email
        }
        return new Promise((resolve, reject) => {
            // Validation to ensure that we don't create a user with duplicate email
            // TODO: Update to use validation here
            lookForExisting(query, "USERS", (err, res) => {
                if (res) {
                    console.log("createUser: User not created, email conflict found. Returning conflicting objects")
                    reject(res)
                } else {
                    console.log("createUser: No conflicts found, creating user")
                    createRecord(myobj, "USERS", (err, res) => {
                        if (err) throw err
                        resolve(res)
                    })
                }
            })
        })

    },

    getUserByID: (userID) => {
        let query = {
            "_id": userID
        }
        return new Promise((resolve, reject) => {
            console.log("DEBUG: Resolving your getuser promise")
            getQuery(query, "USERS", (err, res) => {
                if (err) {
                    console.log("GetUserByID: Error at getOne query")
                    reject(err)
                }
                resolve(res)
            })
        })
    },

    changeUserEmail: (userID, newEmail) => {
        let query = {
            "_id": userID
        }
        let updateArg = {
            email: newEmail,
            updated_at: Date.now()
        }
        let validateQuery = {
            email: newEmail
        }
        return new Promise((resolve, reject) => {
            lookForExisting(validateQuery, "USERS", (err, res) => {
                if (res) {
                    console.log("changeUserEmail: User not created, email conflict found. Returning conflicting objects")
                    reject(res)
                } else {
                    console.log("changeUserEmail: No conflicts found, creating user")
                    updateEntry(query, {
                        $set: updateArg
                    }, "USERS", (err, res) => {
                        if (err) {
                            reject(err)
                        };
                        resolve(res)
                    });
                }
            })
        })
    },

    deleteUser: (userID) => {
        let myquery = {
            "_id": userID
        }
        return new Promise ((resolve, reject) => {
            deleteEntry(myquery, "USERS", (err, res) => {
                if (err) throw err
                resolve(res)
            })

        })
    },
    // Set CRUD
    // CREATE
    // This function takes in the ID from the user generating it, a string for the set
    // name, and an array of strings for later indexing and searching by category
    // No validation required, users can have multiple sets with same names. Each set
    // though will be assigned a unique _id field by mongoDB
    createSet: (userID, setName, categories, cb) => {
        let newSet = {
            FK: userID,
            setName: setName,
            categories: categories
        }

        createRecord(newSet, "SETS", cb)

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
            console.log("CreateRecord: Error at connection")
            cb(err, res)
        }
        const db = client.db(dbName);
        const collection = db.collection(cnName)

        collection.insertOne(obj, (err, res) => {
            if (err) {
                console.log("createRecord: Error at create user function")
                client.close()
                cb(err, res)
            }
            console.log("createRecord: Created one record")
            client.close()
            cb(err, res)
        });
    });
}

// Queries the table and returns an array of results. It should always return
// an array, but will check for a length 0 array and make it null for validation
function getQuery(query, cnName, cb) {
    MongoClient.connect(url, function (err, client) {
        if (err) {
            console.log("getOne: Error at connection")
            cb(err, res)
        }
        const db = client.db(dbName);
        const collection = db.collection(cnName)

        collection.find(query).toArray(function (err, res) {
            if (err) {
                console.log("getOne: Error at query")
            } else if (res.length === 0) {
                console.log("getOne: found no entries matching your query")
                res = null
            } else {
                console.log("getOne: At least one record retrieved")
            }
            client.close();
            cb(err, res)
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

// A wrapper for the querying function that acts as a more easily readable
// validation for some of my functions. Returns null on a 0 length array, 
// and if results are round returns them
function lookForExisting(firstQuery, cnName, cb) {
    getQuery(firstQuery, cnName, (err, res) => {
        if (err) {
            console.log("lookForExisting: Error in query")
            throw err
        }
        if (!res) {
            console.log("lookForExisting: No record found, returning false")
        }
        if (res) {
            console.log("lookForExisting: Record found, returning")
        }
        cb(err, res)
    })
}