const express = require("express");
const router = express.Router();
const { renderUrlPage, renderDynamicPath } = require("../controllers/urls");

router.route("/").get(renderUrlPage).post(renderUrlPage);
router.route("/:string").get(renderDynamicPath);

module.exports = router;
