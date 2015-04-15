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

app.get('/', routes.index);

/*app.get('/', function (req, res) {
  Url.find(function (err, doc) {
    res.send(doc);
  });
});*/

app.listen(port);
console.log('Magic happening on port ' + port);
