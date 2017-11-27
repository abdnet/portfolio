var express = require('express'),
    bodyP = require('body-parser'),
    twig = require('twig'),
    md5 = require('md5'),
    session = require('express-session'),
    randomstring = require("randomstring"),
    path = require('path'),
    mysql = require('mysql');


var app = express();
//configuration//////////////////////////////////////////////////////////:
app.use(bodyP.urlencoded({ extended: true }));
app.use(session( {
  secret : '12345',
  resave: false,
  saveUninitialized: false,
  }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyP.json()); // for parsing application/json

/*
var db    = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'doodle'
});
    
*/
app.get('/', function(request, response) {
  response.render('index.twig');
});

app.get('/test', function(request, response) {
  response.render('projets.twig');
});


app.listen(process.env.PORT , function() {
 console.log('Node app is running on port', app.get('port'));

 });

/*
app.listen(3000, function () {
 console.log('Example app listening on port 3000!');
 });
 
*/