const mongoose = require("mongoose");
const CommentSchema = new mongoose.Schema({
    author: String,
    comment: String,
    createdAt: {
        type: Date,
        default: new Date(),
    }
});
const Comment = mongoose.model("Comment", CommentSchema);
module.exports = Comment;