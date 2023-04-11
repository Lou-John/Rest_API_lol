const Comment = require("../database/models/Comments");
const User = require("../database/models/User");
const Post = require("../database/models/Post");

module.exports = (req, res) => {
  console.log(req.params.id);
  console.log(req.body.comment);
  const comment = new Comment({
    author: "User",
    comment: req.body.comment,
  });
  comment.save((err, result) => {
    if (err) {
      console.log(err);
    } else {
      Post.findById(req.params.id, (err, post) => {
        if (err) {
          console.log(err);
        } else {
          post.comments.push(result);
          post.save();

          console.log("========Comments=======");
          console.log(post.comments);
        }
      });
      console.log(result);
      res.redirect("/");
    }
  });
};
