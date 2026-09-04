const express = require("express");
const fs = require("fs");
const users = require("./MOCK_DATA.json");

const app = express();

app.use(express.urlencoded({ extended: "false" }));

app.use((req, res, next) => {
  console.log("middleware 1");
  next();
});

app.use((req, res, next) => {
  console.log("middleware 2");
  fs.appendFile(
    "logs.txt",
    `${Date.now().toLocaleString()}: ${req.method} ${req.path}\n`,
    (err, data) => {
      next();
    },
  );
});

app
  .route("/users")
  .get((req, res) => {
    return res.send(users);
  })
  .post((req, res) => {
    const id = users.length + 1;
    const body = req.body;
    const user = { id: id, ...body };
    users.push(user);
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
      return res.send({ status: `successful, user id is ${id}` });
    });
  });

app
  .route("/api/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
  })
  .patch((req, res) => {
    const id = Number(req.params.id);
    const userIndex = users.findIndex((user) => user.id === id);
    users[userIndex] = { id: id, ...users[userIndex], ...req.body };
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
      return res.json({ status: "successfully updated" });
    });
  })
  .delete((req, res) => {
    const id = Number(req.params.id);
    const userIndex = users.findIndex((user) => user.id === id);
    users.splice(userIndex, 1);
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
      return res.json({ status: "Successfully Deleted" });
    });
  });

app.listen(8000, () => {
  console.log("Server started");
});
