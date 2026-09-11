const mongoose = require("mongoose");

const urlSchema = mongoose.Schema(
  {
    originalUrl: {
      type: String,
    },
    shortUrl: {
      type: String,
    },
    clicks: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true },
);

const urlModel = mongoose.model("urls", urlSchema);

module.exports = urlModel;
