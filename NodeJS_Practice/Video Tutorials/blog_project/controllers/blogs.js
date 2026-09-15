const Blogs = require("../models/articles");
const { getUser } = require("../service/users");

async function listAllBlogs(req, res) {
  const blogs = await Blogs.find({}).populate("author");
  return res.render("blogs", { blogs: blogs });
}

async function renderBlogForm(req, res) {
  return res.render("blogForm");
}

async function createBlog(req, res) {
  const { title, content } = req.body;
  const { uid } = req.cookies;
  const user = getUser(uid);
  console.log(user);
  await Blogs.create({ title, body: content, author: user.id });
  return res.redirect("/blogs");
}

async function showUserBlogs(req, res) {
  const { uid } = req.cookies;
  const user = getUser(uid);
  const userBlogs = await Blogs.find({ author: user.id }).populate("author");
  return res.render("userBlogs", { blogs: userBlogs });
}

module.exports = {
  listAllBlogs,
  renderBlogForm,
  createBlog,
  showUserBlogs,
};
