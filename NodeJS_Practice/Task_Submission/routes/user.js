const express = require("express");
const router = express.Router();
const { authenticateUser } = require("../middlewares/user");

const {
  getAllUsers,
  createUsers,
  userLogin,
  signupForm,
  loginForm,
} = require("../controllers/user");

router.get("/showAllUsers", authenticateUser, getAllUsers);
router.get("/register", signupForm);
router.post("/register", createUsers);
router.get("/login", loginForm);
router.post("/login", userLogin);

module.exports = router;
