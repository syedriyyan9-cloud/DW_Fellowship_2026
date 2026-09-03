const express = require("express");

const app = express();

app.route("/").get((req, res) => {
  res.send("this is homepage");
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.listen(8000, () => console.log("Server Started"));
