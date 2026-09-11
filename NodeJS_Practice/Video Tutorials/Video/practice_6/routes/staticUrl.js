const express = require("express");
const router = express.Router();
const { renderHomePage } = require("../controllers/urls");
const { renderSignup, renderLoginPage } = require("../controllers/users");

// router.get("/", renderHomePage);
router.get("/signup", renderSignup);
router.get("/login", renderLoginPage);
router.get("/url", renderHomePage);

module.exports = router;
