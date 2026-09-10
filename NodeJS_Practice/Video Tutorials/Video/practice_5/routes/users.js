const express = require("express");
const router = express.Router();
const { handleUserSignup, handleUserLogin } = require("../controllers/users");

router.route("/").get(handleUserSignup).post(handleUserSignup);
router.route("/login").get(handleUserLogin).post(handleUserLogin);

module.exports = router;
