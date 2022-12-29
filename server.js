var express = require('express');
var app = express();
var path=require("path");
var fs=require("fs");


//server configuration
app.use(express.static(path.join(__dirname,'public')));

 app.get('/', function (req, res) {
   res.sendFile(path.join(___dirname + '/index.html'));
});
 

app.get('/hello', function (req, res) {
  console.log("CAlling rest api");
  var person={firstName:'Pratibha',lastName:'Madole',age:23};
  res.send(person);
});

 
var server = app.listen(8000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://localhost:4000", host, port)
})