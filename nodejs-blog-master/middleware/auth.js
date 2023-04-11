const User = require("../database/models/User");
module.exports = (req, res,next) => {
    // Find the user by id
    User.findById(req.session.userId, (error, user)).exec();
};