// References:
// - https://scotch.io/tutorials/build-a-restful-api-using-node-and-express-4
// - http://www.sitepoint.com/using-redis-node-js/
// - https://github.com/Tutorialindustry/node.js/blob/node.js/Nodejs-redis-tutorial/views/index.jade
// - http://javascriptplayground.com/blog/2012/06/node-express-todo-app-redis/
// - http://www.hacksparrow.com/using-redis-with-node-js.html
// - Project 1
// - HW 7

"use strict";

var express = require('express');
var mongoose = require('mongoose');
var app = express();
var port = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost/urls');

// inspiration for the following from:
// http://codeforgeek.com/2014/06/express-nodejs-tutorial/
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.get('/', function (req, res) {

});

app.listen(port);
console.log('Magic happening on port ' + port);
