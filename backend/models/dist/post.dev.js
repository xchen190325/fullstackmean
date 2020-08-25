"use strict";

var mongoose = require('mongoose');

var postSchema = mongoose.Schema({
  title: {
    type: String,
    reuqired: true
  },
  content: {
    type: String,
    required: true
  }
});
module.exports = mongoose.model('Post', postSchema);