const express = require("express");
const router = express.Router();
const { listAllBlogs } = require("../controllers/blogs");

router.get("/", listAllBlogs);

module.exports = router;
