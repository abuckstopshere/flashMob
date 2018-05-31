const orm = require('./orm')
const assert = require('assert')

let userID = ""
// "User Test Obj", but shorter
let uto = {
    familyName: "Malach",
    givenName: "Michael",
    email: "mmalach84@ucsd.edu",
    auth: "randomsetofcharacters23l4km34klm#$#$"
}

let uto2 = {
    familyName: "Hemsworth",
    givenName: "Christopher",
    email: "chemsworth841@ucsd.edu",
    auth: "anotherrandsetkeyslk234lkf"
}


// console.log("User CRUD Test: Beginning")
// orm.createUser(uto.familyName, uto.givenName, uto.email, uto.auth)
//     .then((fulfilled) => {
//         userID = fulfilled.ops[0]._id
//         console.log("User CRUD Test SUCCESS: user created")
//         console.log("User CRUD Test: Attempting to create duplicate user")
//         orm.createUser(uto.familyName, uto.givenName, uto.email, uto.auth)
//             .then((fulfilled) => {
//                 console.log("User CRUD Test FAILURE: Created duplicant entry")
//             }).catch((rejection) => {
//                 console.log("User CRUD Test SUCCESS: Failed duplicate entry")
//                 console.log("User CRUD Test: Attempting to change email to existing e-mail")
//                 orm.changeUserEmail(userID, uto.email)
//                     .then((fulfilled) => {
//                         console.log("User CRUD Test FAILURE: Altered email to duplicate")
//                     }).catch((rejection) => {
//                         console.log("User CRUD Test SUCCESS: Successfully avoided changing email to duplicate entry")
//                         console.log("User CRUD Test: Attempting to change to new email")
//                         orm.changeUserEmail(userID, uto.email + "2")
//                             .then((fulfilled) => {
//                                 console.log("User CRUD Test SUCCESS: Successfully changed to new novel email")
//                                 console.log("User CRUD Test: Beginning deletion test")
//                                 orm.deleteUser(userID)
//                                     .then((fulfilled) => {
//                                         console.log("User CRUD Test SUCCESS: Successfully deleted user")
//                                     }).catch((rejected) => {
//                                         console.log("User CRUD Test FAILURE: Failed to delete entry")
//                                     })
//                             }).catch((rejected) => {
//                                 console.log("User CRUD Test FAILURE: Failed changing to new email")
//                             })
//                     })
//             })
//     })
//     .catch((rejection) => {
//         console.log("User CRUD test FAILURE: Failed initial user creation")
//         console.log(rejection)
//     })

purgeTestCases()
orm.createUser(uto.familyName, uto.givenName, uto.email, uto.auth)
    .then((fulfilled) => {
        userID = fulfilled.ops[0]._id
        console.log(fulfilled)
        console.log(fulfilled.ops[0])
        console.log("User CRUD Test SUCCESS: User created")
        return userID
    })
    .then((userID) => {
        return new Promise((resolve, reject) => {
            orm.createUser(uto.familyName, uto.givenName, uto.email, uto.auth)
            .then((fulfilled => {
                console.log("User CRUD Test FAILURE: Created user with duplicate email")
                purgeTestCases()
            }))
            .catch((rejected) => {
                console.log("User CRUD Test SUCCESS: Rejected on duplicate email")
                resolve(userID)
            })
        })
    })
    .then((userID) => {
        return new Promise((resolve, reject) => {
            orm.changeUserEmail(userID, uto2.email)
            .then((fulfilled) => {
                console.log("User CRUD Test SUCCESS: Changed user email")
                resolve(userID)
            })
            .catch((rejected) => {
                console.log("User CRUD Test FAILED: Failed to change user email")
                console.log(rejected)
                purgeTestCases()
            })
        })
    })
    .then((userID) => {
        return new Promise((resolve, reject) => {
            orm.changeUserEmail(userID, uto2.email)
            .then((fulfilled) => {
                console.log("User CRUD Test FAILED: Changed user email to duplicate")
                purgeTestCases()
            })
            .catch((rejected) => {
                console.log("User CRUD Test SUCCESS: Failed to change to duplicate email")
                resolve(userID)
            })
        })
    })
    .then((userID) => {
        return new Promise((resolve, reject) => {
            orm.deleteUser(userID)
                .then((fulfilled) => {
                    console.log("User CRUD Test SUCCESS: User deleted")
                    resolve(fulfilled)
                })
        })
    })
    .then((testValue) => {
        console.log("Chain continued " + testValue)
        runSecondSeries()
    })
    .catch((rejection) => {
        console.log("User CRUD test FAILURE: Failed initial user creation")
        console.log(rejection)
        purgeTestCases()
    })

function runSecondSeries() {
    let testVars = {
        _id: "Placeholder ID2",
        setName: "Test set",
        categories: ["chemistry", "biology", "math", "other stuff", "this thing"],
    }
    // This function tests the SETS functionality
    let setID;
    orm.createSet(testVars._id, testVars.setName, testVars.categories)
    .then((fulfilled) => {
        console.log("Set CRUD test: Set created successfully")
        console.log(fulfilled.ops[0])
        setID = fulfilled.ops[0]._id
        return 
    })
    .then((fulfilled) => {
        orm.getSetByAuthor(testVars._id)
        .then((fulfilled) => {
            console.log("Set CRUD Test SUCCESS: Successfully queried for sets by author, as follows")
            console.log(fulfilled)
            return "Successfully completed"
        })
        .catch((rejection) => {
            console.log("Set CRUD Test FAILURE: Unable to query for sets by author")
            console.log(rejection)
        })

    }).then((fulfilled) => {
        orm.getSetsByCategory("this thing")
        .then((fulfilled) => {
            console.log("Set CRUD Test SUCCESS: Queried by category, as follows")
            console.log(fulfilled)
            return
        }).catch((rejection) => {
            console.log("Set CRUD Test FAILURE: Failed to query by category, error follows")
            console.log(rejection)
        })
    })
    .then((fulfilled) => {
        orm.getSetAll()
        .then((fulfilled) => {
            console.log("Successfully queried for all sets")
            console.log(fulfilled)
            return
        })
        .catch((rejection) => {
            console.log("Set CRUD Test FAILURE: Failed to query for all sets")
            console.log(rejection)
        })
    })
    .then((fulfilled) => {
        orm.deleteSet(setID)
        .then((fulfilled) => {
            console.log("Set CRUD Test SUCCESS: Deleted set")
            runThirdSeries()
        })
        .catch((rejection) => {
            console.log("Set CRUD Test FAILURE: Error deleting set, as follows")
            console.log(rejection)
        })
    })
    .catch((rejection) => {
        console.log("Set CRUD test: FAILURE")
        console.log(rejection)
    })
}


function runThirdSeries() {
    console.log("Card CRUD Test INITIALIZED")


}

 // This function will run after test failures to delete test entries from the tables
 // to make way for the next round of tests.
 // Of course, this entirely relies on the search and delete functions working.
 function purgeTestCases() {
    console.log("Attempting a purge of test cases input by this test series")
    console.log("purgeTestCases: deleting " + uto.email + " entry")
    orm.getUserByEmail(uto.email)
    .then((fulfilled) => {
        console.log(fulfilled[0]._id)

        orm.deleteUser(fulfilled[0]._id)
        
    }).catch((rejection) => {
        console.log(rejection)
    })
    console.log("purgeTestCases: deleting second email entry")
    orm.getUserByEmail(uto2.email)
    .then((fulfilled) => {
        orm.deleteUser(fulfilled[0]._id)
    })
    .catch((rejection) => {
        console.log(rejection)
    })
 }