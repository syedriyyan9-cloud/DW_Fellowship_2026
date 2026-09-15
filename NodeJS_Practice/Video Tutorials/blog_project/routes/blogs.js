const express = require("express");
const router = express.Router();
const {
  listAllBlogs,
  renderBlogForm,
  createBlog,
  showUserBlogs,
  renderEditForm,
  editBlog,
  deleteBlog,
} = require("../controllers/blogs");

router.get("/", listAllBlogs);
router.get("/blogForm", renderBlogForm);
router.post("/createBlog", createBlog);
router.get("/userBlogs", showUserBlogs);
router.get("/update/:string", renderEditForm);
router.post("/update", editBlog);
router.get("/delete/:string", deleteBlog);

module.exports = router;
