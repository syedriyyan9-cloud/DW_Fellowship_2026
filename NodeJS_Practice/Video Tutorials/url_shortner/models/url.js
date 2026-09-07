const mongoose = require("mongoose");

const urlSchema = mongoose.Schema({
  originalUrl: {
    type: String,
    required: true,
    unique: true,
  },
  shortUrl: {
    type: String,
  },
  clicks: {
    type: Number,
  },
});

const urlModel = mongoose.model("url", urlSchema);

module.exports = { urlModel };
