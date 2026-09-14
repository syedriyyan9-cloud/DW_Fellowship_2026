const { getUser } = require("../service/users");

function authenticateUser(req, res, next) {
  try {
    const { uid } = req.cookies;
    const user = getUser(uid);
    console.log(user);
    if (!user) return res.send("User Not Found");
    req.user = user;
  } catch (err) {
    console.log(err);
  }
  next();
}

module.exports = {
  authenticateUser,
};
