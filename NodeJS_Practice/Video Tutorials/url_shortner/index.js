const express = require("express");
const { connectToDatabase } = require("./connection");
const routes = require("./routes/url");
const PATH = 8000;
connectToDatabase("mongodb://127.0.0.1:27017/short-url");

const app = express();

app.use(express.json());

app.use("/", routes);

app.listen(PATH, () => console.log("Server Started"));
