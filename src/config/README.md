# FlashMOB MongoDB ORM

This ORM is designed to work out of the box by a simple 

`const orm = require('./orm')`

out of the box. The orm object includes static methods that allow an API layer to interact with a MongoDB. In order to ensure everything is in order, try running the ormtest.js file first. The console should display a series of messages including "Test....SUCCESS" messages.

It uses promise based architecture so there should be no async concerns within the methods themselves. 

Methods can be used as follows:

## USERS CRUD

Creation

    orm.createUser(familyName, givenName, email, auth)
    .then((fulfilled) => {
        // Code to handle your returned data goes here. On success, you will receive an object from the ORM containing your new user
    })
    .catch((rejected) => {
        // If the user already exists, the request will be rejected and you will receive the USERS object that already exists. From here you can take its _id field, or whatever
    })

Querying for a user

    orm.getUserByID(userID)
    .then((fulfilled) => {
        // On success, you will be returned an array of the user who matches your query. This function should always only return one user
    }).catch((rejected) => {
        // This can return if there was an error, in which case you will receive the error, or it can return a string if you found no users.
    })

Change a users email

    orm.changeUserEmail(userID, newEmail)
    .then((fulfilled) => {
        // Upon fulfillment, returns the new user's object
    })
    .catch((rejected) => {
        // This call can be rejected if the email you're attempting to change to already exists, or there's an error
    })

Deleting a user

    orm.deleteUser(userID)
    .then((fulfilled) => {
        // I'm actually not sure what this returns. Papa bless
    })


# FlashMOB txt to card conversion tool

Using an ANKI plug-in that converts their cards to a .txt file format, you can import those cards straight into our database using this tool.

For instance, you want to import a file called

`biology.txt` 

into a set called

`biology` with the category `biology`

The syntax for the CLI converter is as follows

`node conversionTool.js <set name> <set category> <file name>`

File name does need the extension, but as long as it's in the `./config/data/` directory, we'll take care of the pathing. So for your biology.txt file the CLI input would look like so

`node conversionTool.js biology biology biology.txt` (sorry for not using something more interesting)

For a more interesting example, here's how you'd input the guitar flashcard set

`node conversionTool.js 'guitar cards' music 'Nashville Numbers - Fretboard Anatomy GuitarOS.txt'`

