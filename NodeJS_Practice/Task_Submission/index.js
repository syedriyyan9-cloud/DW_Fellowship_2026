const express = require("express");
const app = express();
const connection = require("./connection");
const cookieParser = require("cookie-parser");
const userRouter = require("./routes/user");
const taskRouter = require("./routes/task");
const { authenticateUser } = require("./middlewares/user");

connection("mongodb://127.0.0.1:27017/TASK");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.set("view engine", "ejs");
app.set("views", "./views");

app.use("/user", userRouter);
app.use("/task", taskRouter);
app.get("/", (req, res) => {
  return res.render("home", { user: req.user });
});

app.listen(8000, () => console.log("server Started"));
