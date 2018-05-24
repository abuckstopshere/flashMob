const orm = require('./orm')
const assert = require('assert')

let userID = ""
// Test the create user functionality
orm.createUser("malach", "michael", "mmalach7@ucsd.edu", "randomkey2348342#*#$#$*jlsdkf", (err, res) => {
    if (err) throw err
    console.log("Result from createUser is ")
    console.log(res.ops[0])
    userID = res.ops[0]._id
    console.log("Test Data: User ID " + userID)
    orm.getUserByID(userID, (err, res) => {
        if (err) throw err
        console.log("results from getUserbyID: ")
        console.log(res)
    })

    orm.changeUserEmail(userID, "gmalach@gmail.com", (err, res) => {
        if (err) {
            console.log("There was a problem with updating")
        } else {
            console.log("Updated an email successfully")
            orm.getUserByID(userID, (err, res) => {
                if (err) throw err
                console.log("results from getUserbyID: ")
                console.log(res)
                console.log("Update successful")

                orm.deleteUser(userID, (err, res) => {
                    if (err) {
                        console.log("Error when deleting")
                    } else {
                        console.log("Successfully deleted ID" + userID)
                    }
                })
            })
        }
    })

})

// Test the query by user ID functionality

// this would create a async problem
// orm.getUserByID(userID, (err, res) => {
//     if (err) throw err
//     console.log("results from getUserbyID: ")
//     console.log(res)
// })