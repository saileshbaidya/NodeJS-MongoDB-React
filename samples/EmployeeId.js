var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost/";
var str = "";

app.route('/Employeeid').get(function(req, res) {
   MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
       var dbo = db.db("EmployeeDB");
	   var collection = dbo.collection("Employee");
       var cursor = collection.find({});
       str = "";
       cursor.forEach(function(item) {
           if (item != null) {
                   str = str + "    Employee id  " + item.Employeeid + "</br>";
           }
       }, function(err) {
           res.send(str);
           db.close();
          }
       );
   });
});
var server = app.listen(8080, function() {});
