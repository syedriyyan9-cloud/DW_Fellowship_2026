const express = require("express");
const mongoose = require("mongoose");
const fs = require("fs");

// connection
mongoose
  .connect("mongodb://127.0.0.1:27017/learning_database")
  .then(() => console.log("Connected"))
  .catch((err) => console.log("Err: ", err));

// schma
const userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    gender: {
      type: String,
      required: true,
    },
    job_title: {
      type: String,
    },
  },
  { Timestamp: true },
);

// model
const userModel = mongoose.model("user", userSchema);

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  fs.appendFile(
    "logs.txt",
    `${Date.now()} ${req.method} ${req.path}\n`,
    (err, data) => {
      console.log(err);
    },
  );
  next();
});

app
  .route("/users")
  .get(async (req, res) => {
    const user = await userModel.find({});
    const html = `
    <ul>
    ${user.map((user) => `<li> ${user.firstName} </li>`).join("")}
    </ul>
    `;
    return res.send(html);
  })
  .post(async (req, res) => {
    const body = req.body;
    await userModel.create({
      firstName: body.first_name,
      lastName: body.last_name,
      email: body.email,
      gender: body.gender,
      job_title: body.job_title,
    });
    return res.status(201).json({ status: "success" });
  });

app
  .route("/api/users/:id")
  .get(async (req, res) => {
    const user = await userModel.findById(req.params.id);
    return res.status(200).json({ user: user });
  })
  .patch(async (req, res) => {
    const body = req.body;
    await userModel.findByIdAndUpdate(req.params.id, {
      firstName: body.first_name,
      lastName: body.last_name,
      email: body.email,
      gender: body.gender,
      job_title: body.job_title,
    });
    return res.status(200).json({ status: "Success" });
  })
  .delete(async (req, res) => {
    await userModel.findByIdAndDelete(req.params.id);
    return res.status(200).json({ status: "Success" });
  });

app.listen(8000, () => console.log("Server Started"));
