const express = require("express");
const router = express.Router();
const { redirectToHome, countClicks } = require("../controllers/urls");

router.post("/", redirectToHome);
router.get("/:string", countClicks);

module.exports = router;
