const express = require("express");
const router = express.Router();
const {
  listAllBlogs,
  renderBlogForm,
  createBlog,
  showUserBlogs,
} = require("../controllers/blogs");

router.get("/", listAllBlogs);
router.get("/blogForm", renderBlogForm);
router.post("/createBlog", createBlog);
router.get("/userBlogs", showUserBlogs);

module.exports = router;
