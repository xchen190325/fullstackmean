"use strict";

var express = require("express");

var bodyParser = require("body-parser");

var mongoose = require('mongoose');

var Post = require('./models/post');

var app = express();
mongoose.connect('mongodb+srv://admin:admin@cluster0.lsik3.mongodb.net/angular-test?retryWrites=true&w=majority').then(function () {
  console.log('Connected to mongoDB altas');
})["catch"](function () {
  console.log('Connection to MongoDB failed.');
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
  next();
});
app.post("/api/posts", function (req, res, next) {
  var post = new Post({
    title: req.body.title,
    content: req.body.content
  });
  post.save().then(function (result) {
    console.log(result + "hello");
  });
  console.log(post);
  res.status(201).json({
    message: 'Post added successfully'
  });
});
app.get("/api/posts", function (req, res, next) {
  Post.find().then(function (documents) {
    res.status(200).json({
      message: "Posts fetched successfully!",
      posts: documents
    });
  });
});
app["delete"]('/api/posts/:id', function (req, res, next) {
  console.log(req.params.id);
  Post.deleteOne({
    _id: req.params.id
  }).then(function (result) {
    console.log("Delete successed " + result.content);
  });
  res.status(200).json({
    message: "Post Deleted!"
  });
});
module.exports = app;