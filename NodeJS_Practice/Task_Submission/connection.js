const mongoose = require("mongoose");

async function connectToDb(url) {
  await mongoose.connect(url);
  return "Connected to DB";
}

module.exports = connectToDb;
