// References:
// - https://scotch.io/tutorials/build-a-restful-api-using-node-and-express-4
// - http://www.sitepoint.com/using-redis-node-js/
// - https://github.com/Tutorialindustry/node.js/blob/node.js/Nodejs-redis-tutorial/views/index.jade
// - http://javascriptplayground.com/blog/2012/06/node-express-todo-app-redis/
// - http://www.hacksparrow.com/using-redis-with-node-js.html
// - Project 1
// - HW 7
// https://egghead.io/lessons/nodejs-first-api-with-node-js-express-and-mongodb

"use strict";

var express = require('express');
var mongoose = require('mongoose');
var app = express();

// reference for the following:
// http://javascriptplayground.com/blog/2012/04/node-js-a-todo-app-with-express/
//var routes = require('./routes');
var port = process.env.PORT || 3000;

// inspiration for the following three blocks from:
// https://egghead.io/lessons/nodejs-first-api-with-node-js-express-and-mongodb
mongoose.connect('mongodb://localhost/urls');

var urlSchema = {
  long_url: String,
  short_url: String,
  short_url_clicks: Number
}

var Url = mongoose.model('Url', urlSchema, 'url');

// inspiration for the following from:
// http://codeforgeek.com/2014/06/express-nodejs-tutorial/
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

// routes
app.get('/', function (req, res) {
 res.render('index', { title: 'URL Shortener. Dig it.' });
});

app.post('/converted', function (req, res) {
  // trying to pass in the url from index.jade's form,
  // tried googling the issue - took way too much time, no success :-(
  // passing data between jade files has also been very difficult...
  // all i wanted to do was print the entered url......
  res.render('converted', { title: 'URL Converted', url: req.url });
});

app.listen(port);
console.log('Magic happening on port ' + port);

// reference for the following:
// http://javascriptplayground.com/blog/2012/04/node-js-a-todo-app-with-express/
//app.get('/', routes.index);
//app.post('/converted', routes.converted);

/*app.get('/', function (req, res) {
  Url.find(function (err, doc) {
    res.send(doc);
  });
});*/
