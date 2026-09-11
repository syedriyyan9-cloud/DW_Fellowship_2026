const { getUser } = require("../service/auth");

function restrictToLoggedinUsers(req, res, next) {
  const { uid } = req.cookies;
  if (!uid) return res.redirect("/login");
  const user = getUser(uid);
  if (!user) return res.redirect("/login");
  req.user = user;
  next();
}

module.exports = {
  restrictToLoggedinUsers,
};
