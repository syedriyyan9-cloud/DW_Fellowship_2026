const User = require("../models/user");
const { setUser } = require("../services/user");

async function getAllUsers(req, res, next) {
  try {
    const allUsers = await User.find({});
    return res.render("allusers", { users: allUsers });
  } catch (err) {
    next(err);
  }
}

async function createUsers(req, res, next) {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ error: "All fields required" });
    }

    const user = await User.create({ name, email, password });
    const token = setUser(user);
    res.cookie("token", token, { httpOnly: true });
    return res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    // Duplicate email (Mongo error code 11000)
    if (err.code === 11000) {
      return res.status(409).json({ error: "Email already in use" });
    }
    next(err);
  }
}

async function userLogin(req, res, next) {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Email and password required" });
    }

    const user = await User.findOne({ email, password });
    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = setUser(user);
    res.cookie("token", token, { httpOnly: true });
    return res.redirect("/");
  } catch (err) {
    next(err);
  }
}

function loginForm(req, res) {
  return res.render("loginForm");
}

function signupForm(req, res) {
  return res.render("signupForm");
}

module.exports = {
  getAllUsers,
  createUsers,
  userLogin,
  signupForm,
  loginForm,
};
