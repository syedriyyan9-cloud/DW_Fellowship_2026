const user = require("../models/users");
const { v4: uuidv4 } = require("uuid");

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
    const isPresent = await user.findOne({ email, password });
    if (isPresent) {
      //   const sessionId = uuidv4();
      return res.status(307).redirect("/url");
    }
  }
  return res.status(200).render("login");
}

module.exports = {
  handleUserSignup,
  handleUserLogin,
};
