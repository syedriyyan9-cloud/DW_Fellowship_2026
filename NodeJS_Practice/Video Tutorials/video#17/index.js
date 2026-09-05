const express = require("express");
const fs = require("fs");
const users = require("./MOCK_DATA.json");

const app = express();

app.use(express.urlencoded({ extended: "false" }));

app.use((req, res, next) => {
  fs.appendFile(
    "logs.txt",
    `${Date.now()} ${req.method} ${req.url}\n`,
    (err, data) => {
      next();
    },
  );
});

app.use((req, res, next) => {
  const body = req.body;
  console.log("Middleware 2");
  if (
    !body.first_name ||
    !body.last_name ||
    !body.email ||
    !body.gender ||
    !body.job_title
  ) {
    return res.status(400).send("All fields must be filled");
  }
  next();
});

app
  .route("/users")
  .get((req, res) => {
    res.send(users);
  })
  .post((req, res) => {
    const id = users.length + 1;
    const body = req.body;
    const user = { id: id, ...body };
    users.push(user);
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
      res.status(201).send("successfully added");
    });
  });

app.listen(8000, () => console.log("Server started"));
