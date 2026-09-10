const express = require("express");
const connect = require("./connection");
const { restrictToLoginUser } = require("./middleware/auth");
const cookie = require("cookie-parser");
const urlRouter = require("./routes/urls");
const userRouter = require("./routes/users");

connect("mongodb://127.0.0.1:27017/MVC-urlshortner");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookie());
app.set("view engine", "ejs");
app.set("views", "./views");

app.use("/url", restrictToLoginUser, urlRouter);
app.use("/signup", userRouter);

app.listen(8000, () => console.log("Server started"));
