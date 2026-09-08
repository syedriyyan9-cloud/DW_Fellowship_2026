const express = require("express");
const connect = require("./connection");
const router = require("./routes/urls");

connect("mongodb://127.0.0.1:27017/MVC-urlshortner");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", "./views");

app.use("/", router);

app.listen(8000, () => console.log("Server started"));
