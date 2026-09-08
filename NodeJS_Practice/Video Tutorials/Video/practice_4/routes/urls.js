const express = require("express");
const router = express.Router();
const {
  renderHomePage,
  renderAboutPage,
  renderSignupForm,
} = require("../controllers/urls");

router.route("/").get(renderHomePage).post(renderHomePage);
router.get("/about", renderAboutPage);
router.route("/signup").get(renderSignupForm);

module.exports = router;
