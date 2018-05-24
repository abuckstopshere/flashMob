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
    createUser: (userName, familyName, givenName, email, auth, cb) => {
        var myobj = {
            user: userName,
            auth: auth,
            familyName: familyName,
            givenName: givenName,
            email: email,
            authKey: auth
        };
        // console.log(createRecord(myobj, "USERS"))
        cb(createRecord(myobj, "USERS"))
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