const URL = require("../models/url");
const shortid = require("shortid");
async function renderHomePage(req, res) {
  const allUrls = await URL.find({});
  return res.render("home", { urls: allUrls });
}

async function redirectToHome(req, res) {
  const { url } = req.body;
  const short = shortid.generate();
  await URL.create({
    originalUrl: url,
    shortUrl: short,
  });
  return res.redirect("/url");
}

async function countClicks(req, res) {
  const path = req.params.string;
  const originalurl = await URL.findOne({ shortUrl: path });
  if (!originalurl) return res.redirect("/url");
  originalurl.clicks += 1;
  originalurl.save();
  return res.redirect(originalurl.originalUrl);
}

module.exports = {
  renderHomePage,
  redirectToHome,
  countClicks,
};
