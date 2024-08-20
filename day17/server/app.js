const http = require("http");
const express = require("express");
const app = express();
const parser = require("body-parser");
const cors = require("cors");

app.set("port", 5000);

// static 미들 웨어
app.use("/", express.static("public"));

//  URL, port 등이 다른 클라이언트 요청허용 (가라다)
app.use(cors());

const todolist = [
  { no: 101, todo: "일어나기", done: true },
  { no: 102, todo: "먹기", done: false },
  { no: 103, todo: "자기", done: true },
];

app.get("/todo", (req, res) => {
  // 목록출력
  res.send(todolist);
});

app.post("/todo", (req, res) => {
  // 할일 입력
  res.send(todolist);
});

app.put("/todo", (req, res) => {
  // 할일 수정
  res.send(todolist);
});

app.delete("/todo", (req, res) => {
  // 할일 삭제
  res.send(todolist);
});

const server = http.createServer(app);
server.listen(app.get("port"), () => {
  //   console.log("서버실행중 >>> http://localhost:" + app.get("port"));
});
