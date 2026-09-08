const express = require("express");
const router = require("./routes/urls");
const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.set("view engine", "ejs");
app.set("views", "./views");

app.use("/", router);

app.listen(8000, () => console.log("server started"));
