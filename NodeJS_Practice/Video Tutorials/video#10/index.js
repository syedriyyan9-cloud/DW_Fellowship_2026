const http = require("http");
const fs = require("fs");
const url = require("url");
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.send("hello from home page");
});

app.get("/about", (req, res) => {
  return res.send(`Hello, ${req.query.name}`);
});

const server = http.createServer(app);

// const server = http.createServer((req, res) => {
//   if (req.url === "/favicon.ico") {
//     return res.end();
//   }
//   const log = `${Date.now()}: ${req.url} new request\n`;
//   const myUrl = url.parse(req.url, true);
//   console.log(myUrl);
//   fs.appendFile("logs.txt", log, (err) => (err ? console.log(err) : ""));
//   switch (myUrl.pathname) {
//     case "/":
//       res.end("Home");
//       break;
//     case "/about":
//       const username = myUrl.query.name;
//       res.end(`Hi, ${username}`);
//       break;
//     case "/result":
//       const search = myUrl.query.search_query;
//       res.end(`search: ` + search);
//       break;
//     default:
//       res.end("404 not found");
//       break;
//   }
// });
// server.listen(8000, () => {
//   console.log("Server started");
// });
app.listen(8000, () => console.log("Server Started"));
