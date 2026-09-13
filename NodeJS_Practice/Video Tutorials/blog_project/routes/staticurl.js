const express = require("express");
const router = express.Router();
const {
  renderHomePage,
  renderSignup,
  renderLogin,
} = require("../controllers/staticurls");

router.get("/", renderHomePage);
router.get("/signup", renderSignup);
router.get("/login", renderLogin);

module.exports = router;
