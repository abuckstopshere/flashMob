const orm = require('./orm')
const assert = require('assert')

let userID = ""
// "User Test Obj", but shorter
let uto = {
    familyName: "Malach",
    givenName: "Michael",
    email: "elizabeth@ucsd.edu",
    auth: "randomsetofcharacters23l4km34klm#$#$"
}

let uto2 = {
    familyName: "Hemsworth",
    givenName: "Christopher",
    email: "chemsworth33@ucsd.edu",
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


orm.createUser(uto.familyName, uto.givenName, uto.email, uto.auth)
    .then((fulfilled) => {
        userID = fulfilled.ops[0]._id
        console.log("User CRUD Test SUCCESS: User created")
        return userID
    })
    .then((userID) => {
        return new Promise((resolve, reject) => {
            orm.createUser(uto.familyName, uto.givenName, uto.email, uto.auth)
            .then((fulfilled => {
                console.log("User CRUD Test FAILURE: Created user with duplicate email")
            }))
            .catch((rejected) => {
                console.log("User CRUD Test SUCCESS: Rejected on duplicate email")
                resolve(userID)
            })
        })
    })
    .then((userID) => {
        return new Promise((resolve, reject) => {
            orm.changeUserEmail(userID, "second@email.com")
            .then((fulfilled) => {
                console.log("User CRUD Test SUCCESS: Changed user email")
                resolve(userID)
            })
            .catch((rejected) => {
                console.log("User CRUD Test FAILED: Failed to change user email")
            })
        })
    })
    .then((userID) => {
        return new Promise((resolve, reject) => {
            orm.changeUserEmail(userID, "second@email.com")
            .then((fulfilled) => {
                console.log("User CRUD Test FAILED: Changed user email to duplicate")
            })
            .catch((rejected) => {
                console.log("User CRUD Test SUCCESS: Failed to change to duplicate email")
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
    })
    .catch((rejection) => {
        console.log("User CRUD test FAILURE: Failed initial user creation")
        console.log(rejection)
    })