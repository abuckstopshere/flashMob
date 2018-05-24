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
    createUser: (userName, familyName, givenName, email, auth) => {
        var myobj = {
            user: userName,
            auth: auth,
            familyName: familyName,
            givenName: givenName,
            email: email,
            authKey: auth
        };
        return createRecord(myobj, "USERS")
    },

    getUserByID: (userID) => {

    },

    changeUserEmail: (userID, newEmail) => {

    },

    deleteUser: (userID) => {

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
function createRecord(obj, cnName) {

    MongoClient.connect(url, function (err, client) {
        if (err) throw err;

        const db = client.db(dbName);
        const collection = db.collection(cnName)

        collection.insertOne(obj, (err, res) => {
            if (err) {
                console.log("Broke at insertOne function");
                throw err
            }
            console.log("1 document inserted into " + cnName);
            console.log(res.ops)
            client.close();
            // Returned is an object of the following structure
            /*
          {
            "acknowledged" : true,
            "insertedId" : ObjectId("56fc40f9d735c28df206d078")
         }
         */
            return res
        });
    });
}