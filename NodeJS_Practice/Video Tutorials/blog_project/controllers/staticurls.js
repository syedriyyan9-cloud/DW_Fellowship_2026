async function renderHomePage(req, res) {
  return res.render("allBlogs");
}

async function renderSignup(req, res) {
  return res.render("signup");
}

async function renderLogin(req, res) {
  return res.render("login");
}

module.exports = {
  renderHomePage,
  renderSignup,
  renderLogin,
};
