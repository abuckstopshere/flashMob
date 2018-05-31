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

## What to expect from these commands

```javascript
CommandResult {
  result: { n: 1, ok: 1 },
  connection:
   Connection {
     domain: null,
     _events:
      { error: [Object],
        close: [Object],
        timeout: [Object],
        parseError: [Object] },
     _eventsCount: 4,
     _maxListeners: undefined,
     options:
      { host: 'localhost',
        port: 27017,
        size: 5,
        minSize: 0,
        connectionTimeout: 30000,
        socketTimeout: 360000,
        keepAlive: true,
        keepAliveInitialDelay: 300000,
        noDelay: true,
        ssl: false,
        checkServerIdentity: true,
        ca: null,
        crl: null,
        cert: null,
        key: null,
        passPhrase: null,
        rejectUnauthorized: false,
        promoteLongs: true,
        promoteValues: true,
        promoteBuffers: false,
        reconnect: true,
        reconnectInterval: 1000,
        reconnectTries: 30,
        domainsEnabled: false,
        disconnectHandler: [Object],
        cursorFactory: [Object],
        emitError: true,
        monitorCommands: false,
        socketOptions: {},
        promiseLibrary: [Function: Promise],
        clientInfo: [Object],
        read_preference_tags: null,
        readPreference: [Object],
        dbName: 'flashmob_db',
        servers: [Array],
        server_options: [Object],
        db_options: [Object],
        rs_options: [Object],
        mongos_options: [Object],
        socketTimeoutMS: 360000,
        connectTimeoutMS: 30000,
        bson: BSON {} },
     id: 3,
     logger: Logger { className: 'Connection' },
     bson: BSON {},
     tag: undefined,
     messageHandler: [Function],
     maxBsonMessageSize: 67108864,
     port: 27017,
     host: 'localhost',
     family: undefined,
     keepAlive: true,
     keepAliveInitialDelay: 300000,
     noDelay: true,
     connectionTimeout: 30000,
     socketTimeout: 360000,
     destroyed: false,
     domainSocket: false,
     singleBufferSerializtion: true,
     serializationFunction: 'toBinUnified',
     ca: null,
     crl: null,
     cert: null,
     key: null,
     passphrase: null,
     ciphers: null,
     ecdhCurve: null,
     ssl: false,
     rejectUnauthorized: false,
     checkServerIdentity: true,
     responseOptions:
      { promoteLongs: true,
        promoteValues: true,
        promoteBuffers: false },
     flushing: false,
     queue: [],
     connection:
      Socket {
        connecting: false,
        _hadError: false,
        _handle: [Object],
        _parent: null,
        _host: 'localhost',
        _readableState: [Object],
        readable: true,
        domain: null,
        _events: [Object],
        _eventsCount: 7,
        _maxListeners: undefined,
        _writableState: [Object],
        writable: true,
        allowHalfOpen: false,
        _bytesDispatched: 710,
        _sockname: null,
        _pendingData: null,
        _pendingEncoding: '',
        server: null,
        _server: null,
        _idleTimeout: 360000,
        _idleNext: [Object],
        _idlePrev: [Object],
        _idleStart: 3308,
        _destroyed: false,
        [Symbol(asyncId)]: 132,
        [Symbol(bytesRead)]: 0,
        [Symbol(asyncId)]: 134,
        [Symbol(triggerAsyncId)]: 131 },
     writeStream: null,
     hashedName: '29bafad3b32b11dc7ce934204952515ea5984b3c',
     workItems: [ [Object] ],
     buffer: null,
     sizeOfMessage: 0,
     bytesRead: 0,
     stubBuffer: null },
  message:
   Response {
     parsed: true,
     raw: <Buffer 3c 00 00 00 45 46 00 00 0b 00 00 00 01 00 00 00 08 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 01 00 00 00 18 00 00 00 10 6e 00 01 00 00 00 01 6f 6b ... >,
     data: <Buffer 08 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 01 00 00 00 18 00 00 00 10 6e 00 01 00 00 00 01 6f 6b 00 00 00 00 00 00 00 f0 3f 00>,
     bson: BSON {},
     opts:
      { promoteLongs: true,
        promoteValues: true,
        promoteBuffers: false },
     length: 60,
     requestId: 17989,
     responseTo: 11,
     opCode: 1,
     fromCompressed: undefined,
     responseFlags: 8,
     cursorId: Long { _bsontype: 'Long', low_: 0, high_: 0 },
     startingFrom: 0,
     numberReturned: 1,
     documents: [ [Object] ],
     cursorNotFound: false,
     queryFailure: false,
     shardConfigStale: false,
     awaitCapable: true,
     promoteLongs: true,
     promoteValues: true,
     promoteBuffers: false,
     index: 44,
     hashedName: '29bafad3b32b11dc7ce934204952515ea5984b3c' },
  ops:
   [ { familyName: 'Malach',
       givenName: 'Michael',
       email: 'mmalach84@ucsd.edu',
       authKey: 'randomsetofcharacters23l4km34klm#$#$',
       created_at: 1527733003090,
       updated_at: 1527733003090,
       _id: 5b0f5b0c2a1fec4c4cc565d0 } ],
  insertedCount: 1,
  insertedId: 5b0f5b0c2a1fec4c4cc565d0 }
  ```


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

