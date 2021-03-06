var express = require('express');
var app = express();
var fs = require("fs");
var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

app.get('/', function (req, res) {
   res.send('Hello World');
})

app.get('/listUsers', function (req, res) {
   fs.readFile( __dirname + "/" + "user.json", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });
})

MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
   if (err) throw err;
   var dbo = db.db("mydb");
  // var myobj = { name: "Company Inc", address: "Highway 37" };
   dbo.createCollection("customers").insertOne({ name: "Company Inc", address: "Highway 37" }, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
 });
 

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})

