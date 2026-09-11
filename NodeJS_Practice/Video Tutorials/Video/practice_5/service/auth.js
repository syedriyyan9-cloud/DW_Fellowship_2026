const jwt = require("jsonwebtoken");
const secret = "123";

function setUser(user) {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
    },
    secret,
  );
}

function getUser(token) {
  try {
    return jwt.verify(token, secret);
  } catch (err) {
    return null;
  }
}

module.exports = {
  setUser,
  getUser,
};
