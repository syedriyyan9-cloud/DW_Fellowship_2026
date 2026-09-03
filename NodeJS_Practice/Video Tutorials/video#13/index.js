const express = require("express");
const users = require("./MOCK_DATA.json");
const fs = require("fs");

const app = express();
app.use(express.urlencoded({ extended: "false" }));

app.get("/users", (req, res) => {
  const html = `
  <ul>
  ${users.map((user) => `<li>${user.first_name}`).join("")}</li>
  </ul>
  `;
  return res.send(html);
});

app.get("/api/users", (req, res) => {
  return res.json(users);
});

app.post("/api/users", (req, res) => {
  const body = req.body;
  // console.log("body", body);
  // users.push({
  //   email: body.email,
  //   first_name: body.first_name,
  //   last_name: body.last_name,
  //   gender: body.gender,
  //   job_title: body.job_title,
  // });
  users.push({ ...body, id: users.length + 1 });
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    return res.json({ status: `Success, id: ${users.length}` });
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
    // TODO: Edit the user with id
    const id = Number(req.params.id);
    const body = req.body;
    let user = users.find((user) => user.id === id);
    let filterUser = users.filter((user) => user.id !== id);
    user = { id: id, ...body };
    filterUser.push(user);
    fs.writeFile(
      "./MOCK_DATA.json",
      JSON.stringify(filterUser),
      (err, data) => {
        return res.json({ status: "success" });
      },
    );
  })
  .delete((req, res) => {
    // TODO: Delete the user with id
    const id = Number(req.params.id);
    const filterUsers = users.filter((user) => user.id !== id);
    fs.writeFile(
      "./MOCK_DATA.json",
      JSON.stringify(filterUsers),
      (err, data) => {
        return res.json({ status: "Success" });
      },
    );
  });

// app.get("/api/users/:id", (req, res) => {
//   const id = Number(req.params.id);
//   const user = users.find((user) => user.id === id);
//   return res.json(user);
// });

// app.patch("/api/users/:id", (req, res) => {
//   // TODO: Edit the user with id
//   return res.json({ status: "pending" });
// });

// app.delete("/api/users/:id", (req, res) => {
//   // TODO: Delete the user with id
//   return res.json({ status: "pending" });
// });

app.listen(8000, () => {
  return console.log("Server started");
});
