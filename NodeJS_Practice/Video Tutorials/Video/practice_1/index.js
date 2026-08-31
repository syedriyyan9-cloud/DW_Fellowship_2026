const fs = require("fs");
const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const log = `${Date.now().toString()}: ${req.url} new log\n`;
  fs.appendFile("logs.txt", log, (err) => (err ? console.log(err) : " "));
  const myUrl = url.parse(req.url, true);
  switch (myUrl.pathname) {
    case "/":
      res.end("Homepage");
      break;
    case "/about":
      res.end("About");
      break;
    default:
      res.end("404 not found");
      break;
  }
});

server.listen(8000, () => {
  console.log("Server Started");
});
