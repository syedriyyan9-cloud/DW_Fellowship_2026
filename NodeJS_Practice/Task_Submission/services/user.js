const jwt = require("jsonwebtoken");
const secret = "alsjdf98aj";

function setUser(user) {
  const token = jwt.sign(
    {
      id: user._id,
      name: user.name,
      email: user.email,
    },
    secret,
  );
  return token;
}

function getUser(token) {
  const user = jwt.verify(token, secret);
  return user;
}

module.exports = {
  setUser,
  getUser,
};
