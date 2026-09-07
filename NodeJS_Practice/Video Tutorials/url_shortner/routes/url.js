const express = require("express");
const router = express.Router();
const {
  getAllUrls,
  generateShortUrl,
  redirectUrl,
} = require("../contorllers/urls");

router.route("/url").get(getAllUrls).post(generateShortUrl);
router.route("/:string").get(redirectUrl);

router.route();

module.exports = router;
