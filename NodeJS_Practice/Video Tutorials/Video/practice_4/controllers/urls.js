async function renderHomePage(req, res) {
  if (req.method === "POST") {
    const { name } = req.body;
    return res.render("home", {
      name: name,
    });
  }
  return res.render("home");
}

async function renderAboutPage(req, res) {
  return res.render("about");
}

async function renderSignupForm(req, res) {
  return res.render("signup");
}

module.exports = {
  renderHomePage,
  renderAboutPage,
  renderSignupForm,
};
