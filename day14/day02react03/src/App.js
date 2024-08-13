import "./App.css";
import React from "react";
import Input from "./components/Input";
import Output from "./components/Output";

const App = () => {
  const [todoListArr, setTodoList] = React.useState([
    { no: 101, title: "운동하기1", done: false },
    { no: 102, title: "운동하기2", done: false },
    { no: 103, title: "운동하기3", done: false },
  ]);
  const [noCnt, setNoCnt] = React.useState(104);

  // function appendItem(title) {
  const appendItem = (title) => {
    // setTodoList 함수를 이용해서 데이터 갱신
    // spread 연산자 사용하면 편함
    // setTodoList([...todoListArr, {no:noCnt, title:title, done: flase}])
    const newItem = { no: noCnt, title: title, done: false };
    setNoCnt(noCnt + 1);
    setTodoList([...todoListArr, newItem]);
  };

  return (
    <div>
      <header className="jumbotron">
        <h1>Todo List</h1>
      </header>
      {/* 입력기능 */}
      <Input appendItem={appendItem} />
      {/* 목록 출력기능 */}
      <Output props={todoListArr} />
    </div>
  );
};

export default App;
