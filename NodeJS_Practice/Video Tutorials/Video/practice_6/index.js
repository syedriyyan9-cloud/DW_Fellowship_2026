const express = require("express");
const connect = require("./connection");
const staticRouter = require("./routes/staticUrl");
const postRouter = require("./routes/urls");
const userRouter = require("./routes/users");
const cookie = require("cookie-parser");
const { restrictToLoggedinUsers } = require("./middleware/auth");

const app = express();
connect("mongodb://127.0.0.1:27017/practice6");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookie());

app.set("view engine", "ejs");
app.set("views", "./views");

app.use("/users", userRouter);
app.use("/url", restrictToLoggedinUsers, postRouter);
app.use("/", staticRouter);

app.listen(8000, () => console.log("Server started"));
