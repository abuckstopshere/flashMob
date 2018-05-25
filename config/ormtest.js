const orm = require('./orm')
const assert = require('assert')

let userID = ""
// "User Test Obj", but shorter
let uto = {
    familyName: "Malach",
    givenName: "Michael",
    email: "mmalach@ucsd.edu",
    auth: "randomsetofcharacters23l4km34klm#$#$"
}

let uto2 = {
    familyName: "Hemsworth",
    givenName: "Christopher",
    email: "chemsworth33@ucsd.edu",
    auth: "anotherrandsetkeyslk234lkf"
}




orm.createUser(uto.familyName, uto.givenName, uto.email, uto.auth)
    .then((fulfilled) => {
        resolve("User Creation Test: Test successful, user created")
    })
    .catch((rejection) => {
        reject("User Creation Test: Test failed, user not created")
    })