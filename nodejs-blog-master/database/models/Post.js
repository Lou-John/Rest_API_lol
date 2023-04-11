const mongoose = require("mongoose");
const Comment = require("../models/Comments.js")

const PostSchema = new mongoose.Schema({
  title: String,
  description: String,
  content: String,
  image: String,
  username: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment',
    },
  ],
});
const Post = mongoose.model("Post", PostSchema);
module.exports = Post;
