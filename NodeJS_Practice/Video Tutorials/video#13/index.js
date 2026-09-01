const express = require("express");
const users = require("./MOCK_DATA.json");

const app = express();

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
  // TODO: create new user
  return res.json({ status: "pending" });
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
    return res.send({ status: "pending" });
  })
  .delete((res, req) => {
    // TODO: Delete the user with id
    return res.send({ status: "pending" });
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
