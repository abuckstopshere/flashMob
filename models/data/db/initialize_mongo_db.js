var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myobj = { familyName: "Malach", givenName: "Michael", setsArray: [], email: "mmalach@ucsd.edu", authID: 838383 };
    dbo.collection("users").insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
  });

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.collection("users").findOne({}, function(err, result) {
      if (err) throw err;
      console.log(result.familyName);
      db.close();
    });
  });