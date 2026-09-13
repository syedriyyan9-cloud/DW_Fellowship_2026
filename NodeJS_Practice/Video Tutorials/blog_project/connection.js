const mongoose = require("mongoose");

async function connectToDb(url) {
  await mongoose.connect(url);
  console.log("Connected to DB");
}

module.exports = connectToDb;
