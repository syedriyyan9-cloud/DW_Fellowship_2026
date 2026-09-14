const Blogs = require("../models/articles");

async function listAllBlogs(req, res) {
  const blogs = await Blogs.find({});
  console.log(blogs);
  return res.render("blogs", { blogs: blogs });
}

module.exports = {
  listAllBlogs,
};
