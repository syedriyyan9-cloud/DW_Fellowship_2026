const User = require("../models/users");
const { v4: uuidv4 } = require("uuid");
const { setUser } = require("../service/auth");

async function handleUserSignup(req, res) {
  if (req.method === "POST") {
    const { name, email, password } = req.body;
    await user.create({ name, email, password });
    return res.send("Created Successfully");
  }
  return res.status(200).render("signup");
}

async function handleUserLogin(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    if (!user) {
      return res.redirect("/signup/login");
    }
    const sessionId = uuidv4();
    setUser(sessionId, user);
    res.cookie("uid", sessionId);
    return res.status(307).redirect("/url");
  }
  return res.status(200).render("login");
}

module.exports = {
  handleUserSignup,
  handleUserLogin,
};
