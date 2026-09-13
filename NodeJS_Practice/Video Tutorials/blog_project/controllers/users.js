const User = require("../models/users");

async function handleSignup(req, res) {
  const { name, email, password } = req.body;
  await User.create({ name, email, password });
  //   res.user = user;
  return res.redirect("/");
}

async function handleLogin(req, res) {
  const { email, password } = req.body;
  const user = await User.find({ email: email, password: password });
  if (!user) return res.send("No user found");
  return res.redirect("/");
}

module.exports = {
  handleSignup,
  handleLogin,
};
