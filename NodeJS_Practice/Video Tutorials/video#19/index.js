const express = require("express");
const userRouter = require("./routes/user.js");
const { connectMongoDb } = require("./connection.js");
const { logReqRes } = require("./middlewares");

// connection
connectMongoDb("mongodb://127.0.0.1:27017/learning_database").then(() =>
  console.log("Database Connected"),
);

const app = express();

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(logReqRes("logs.txt"));

// routes
app.use("/api/users", userRouter);
app.listen(8000, () => console.log("Server Started"));
