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
  await Blogs.create({ title, body: content, author: user.id });
  return res.redirect("/blogs");
}

async function showUserBlogs(req, res) {
  const { uid } = req.cookies;
  const user = getUser(uid);
  const userBlogs = await Blogs.find({ author: user.id }).populate("author");
  return res.render("userBlogs", { blogs: userBlogs });
}

async function renderEditForm(req, res) {
  const blog_id = req.params.string;
  return res.render("updateForm", { id: String(blog_id) });
}

async function editBlog(req, res) {
  const { id, title, content } = req.body;
  const blog = await Blogs.findOne({ _id: id });
  if (!title && content) {
    blog.body = content;
    blog.save();
  } else if (!content && title) {
    blog.title = title;
    blog.save();
  } else if (content && title) {
    blog.title = title;
    blog.body = content;
    blog.save();
  }
  return res.redirect("/blogs/userBlogs");
}

async function deleteBlog(req, res) {
  const blog_id = String(req.params.string);
  await Blogs.findByIdAndDelete(blog_id);
  return res.redirect("/blogs/userBlogs");
}

module.exports = {
  listAllBlogs,
  renderBlogForm,
  createBlog,
  showUserBlogs,
  renderEditForm,
  editBlog,
  deleteBlog,
};
