var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
  if (err) throw err;
  var dbo = db.db("EmployeeDB");
  var myobj = { Employeeid: 1, EmployeeName: "Sailesh Baidya" };
  dbo.collection("Employee").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
  
  var myobj = { Employeeid: 2, EmployeeName: "Abayantika Ranjitkar" };
  dbo.collection("Employee").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
  
  var myobj = { Employeeid: 3, EmployeeName: "Shanaya Baidya" };
  dbo.collection("Employee").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
  
  var myobj = { Employeeid: 4, EmployeeName: "Laxmi Baidya" };
  dbo.collection("Employee").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
  
});