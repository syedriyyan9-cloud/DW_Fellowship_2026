const { urlModel } = require("../models/url");
const shortid = require("shortid");

async function getAllUrls(req, res) {
  const allUrls = await urlModel.find({});
  const html = `
    <ul> 
        ${allUrls
          .map(
            (urls) => `<li> 
            Original URL: ${urls.originalUrl} <br>
            Short URL: ${urls.shortUrl} <br>
            Clicks: ${urls.clicks}
            </li>`,
          )
          .join("")}
    </ul>
    `;
  return res.status(200).send(html);
}

async function generateShortUrl(req, res) {
  const shortUrl = shortid.generate();
  const originalUrl = req.body.url;
  urlModel.create({
    originalUrl: originalUrl,
    shortUrl: shortUrl,
    clicks: 0,
  });
  return res.status(201).send("Created successfully");
}

async function redirectUrl(req, res) {
  const path = req.params.string;
  const isPresent = await urlModel.findOne({ shortUrl: path });
  //   console.log(isPresent);
  if (isPresent) {
    isPresent.clicks += 1;
    await isPresent.save();
    res.status(307).redirect(isPresent.originalUrl);
  } else {
    res.status(404).send("not found");
  }
}

module.exports = {
  getAllUrls,
  generateShortUrl,
  redirectUrl,
};
