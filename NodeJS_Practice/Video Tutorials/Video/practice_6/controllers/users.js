const User = require("../models/users");
const { setUser } = require("../service/auth");

async function renderSignup(req, res) {
  return res.render("signup");
}

async function renderLoginPage(req, res) {
  return res.render("login");
}

async function handleSignup(req, res) {
  const { name, email, password } = req.body;
  await User.create({ name, email, password });
  return res.redirect("/url");
}

async function handleLogin(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });
  if (!user) return res.redirect("/login");
  const token = setUser(user);
  res.cookie("uid", token);
  return res.redirect("/url");
}

module.exports = {
  renderSignup,
  handleSignup,
  renderLoginPage,
  handleLogin,
};
