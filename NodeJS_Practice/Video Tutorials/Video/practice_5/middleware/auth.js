const { getUser } = require("../service/auth");

async function restrictToLoginUser(req, res, next) {
  const id = req.cookies.uid;
  if (!id) {
    return res.redirect("/signup/login");
  }
  const user = getUser(id);
  if (!user) {
    return res.redirect("/signup/login");
  }
  req.user = user;
  next();
}

module.exports = {
  restrictToLoginUser,
};
