const { getUser } = require("../service/users");

function authenticateUser(req, res, next) {
  try {
    const { uid } = req.cookies;
    const user = getUser(uid);
    if (!user) return res.send("User Not Found");
    req.user = user;
  } catch (err) {
    return res.render("signuporlogin");
  }
  next();
}

module.exports = {
  authenticateUser,
};
