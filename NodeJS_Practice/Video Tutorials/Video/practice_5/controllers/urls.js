const { shortUrlModel } = require("../models/urls");
const shortid = require("shortid");

async function renderUrlPage(req, res) {
  if (req.method === "POST") {
    const shortUrl = shortid.generate();
    const originalUrl = req.body.originalUrl;
    await shortUrlModel.create({
      originalUrl: originalUrl,
      shortUrl: shortUrl,
    });
    const objs = await shortUrlModel.find({});
    return res.status(201).render("urlPage", { links: objs });
  }
  const objs = await shortUrlModel.find({});
  return res.status(200).render("urlPage", { links: objs });
}

async function renderDynamicPath(req, res) {
  const path = req.params.string;
  const exists = await shortUrlModel.findOne({ shortUrl: path });
  if (exists) {
    exists.clicks += 1;
    exists.save();
    return res.status(307).redirect(`${exists.originalUrl}`);
  }
}

module.exports = {
  renderUrlPage,
  renderDynamicPath,
};
