const { getUser } = require("../services/user");
const User = require("../models/user");

async function authenticateUser(req, res, next) {
  try {
    const { token } = req.cookies;
    if (!token) {
      return res.status(401).json({ error: "No token provided" });
    }

    const { id } = getUser(token); // throws if JWT invalid
    const user = await User.findById(id).select("-password");
    if (!user) {
      return res.status(401).json({ error: "User not found" });
    }

    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({ error: "Invalid token" });
  }
}

module.exports = {
  authenticateUser,
};
