const mongoose = require("mongoose");

async function connectToDatabase(url) {
  await mongoose.connect(url);
  console.log("Connected");
}

module.exports = { connectToDatabase };
