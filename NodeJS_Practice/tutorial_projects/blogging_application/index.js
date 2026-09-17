const express = require("express");
const path = require("path");
const userRoute = require("./routes/user");
const connectToDb = require("./connectToDb");

const app = express();
const PORT = 8000;

connectToDb("mongodb://127.0.0.1:27017/blogify");

app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use("/", userRoute);
app.get("/", (req, res) => {
  return res.render("home");
});

app.listen(PORT, () => console.log(`Server started at ${PORT}`));
