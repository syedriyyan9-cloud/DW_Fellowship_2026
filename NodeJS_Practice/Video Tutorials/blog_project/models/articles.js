const mongoose = require("mongoose");

const blogSchema = mongoose.Schema(
  {
    title: {
      type: String,
    },
    body: {
      type: String,
    },
    author: {
      type: mongoose.Schema.ObjectId,
      unique: true,
    },
  },
  { timestamps: true },
);

const articleModel = mongoose.model("Blogs", blogSchema);

module.exports = articleModel;
