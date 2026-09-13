const express = require("express");
const connect = require("./connection");
const app = express();
const staticRouter = require("./routes/staticurl");
const usersRouter = require("./routes/users");

connect("mongodb://127.0.0.1:27017/blogs");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.set("view engine", "ejs");
app.set("views", "./views");

app.use("/users", usersRouter);
app.use("/", staticRouter);

app.listen(8000, () => console.log("server started"));
