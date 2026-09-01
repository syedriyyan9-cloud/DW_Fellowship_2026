const express = require("express");

const app = express();
app.get("/", (req, res) => {
  res.send("This is homepage");
});
app.get("/about", (req, res) => {
  res.send("This is about page");
});

app.listen(8000, () => {
  console.log("Server Started");
});
