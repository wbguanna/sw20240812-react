const http = require("http");
const express = require("express");
const app = express();
const parser = require("body-parser");

app.set("port", 5000);

app.get("/test", (req, res) => {
  res.end("<h1>Node.js Server test</h1>");
});

// 이렇게 http 단순 웹서버로도 기능할 수 있긴한다
// const server = http.createServer((req, res) => {
//   res.end("<h1>Node.js Server test</h1>");
// });

const server = http.createServer(app);
server.listen(app.get("port"), () => {
  //   console.log("서버실행중 >>> http://localhost:" + app.get("port"));
});
