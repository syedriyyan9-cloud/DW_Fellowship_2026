const User = require("../models/users");
const { setUser } = require("../service/users");

async function handleSignup(req, res) {
  const { name, email, password } = req.body;
  const user = await User.create({ name, email, password });
  const token = setUser(user);
  res.cookie("uid", token);
  return res.redirect("/");
}

async function handleLogin(req, res) {
  const { email, password } = req.body;
  const user = await User.find({ email: email, password: password });
  if (!user) return res.send("No user found");
  const token = setUser(user);
  res.cookie("uid", token);
  return res.redirect("/");
}

module.exports = {
  handleSignup,
  handleLogin,
};
