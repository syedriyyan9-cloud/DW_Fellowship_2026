const { connect } = require("mongoose");

async function connectToDb(url) {
  await connect(url);
  console.log("connected to database");
}

module.exports = connectToDb;
