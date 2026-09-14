const jwt = require("jsonwebtoken");
const secret = "r124rw";

function setUser(user) {
  const token = jwt.sign(
    {
      name: user.name,
      email: user.email,
    },
    secret,
  );
  return token;
}

async function getUser(token) {
  const user = jwt.verify(token, secret);
  return user;
}

module.exports = {
  setUser,
  getUser,
};
