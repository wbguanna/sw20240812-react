const http = require("http");
const express = require("express");
const app = express();
const parser = require("body-parser");

app.set("port", 5000);

// static 미들 웨어
app.use("/", express.static("public"));

app.get("/todo", (req, res) => {
  // 목록출력
  res.send();
});

app.post("/todo", (req, res) => {
  // 할일 입력
  res.send();
});

app.put("/todo", (req, res) => {
  // 할일 수정
  res.send();
});

app.delete("/todo", (req, res) => {
  // 할일 삭제
  res.send();
});

const server = http.createServer(app);
server.listen(app.get("port"), () => {
  //   console.log("서버실행중 >>> http://localhost:" + app.get("port"));
});
