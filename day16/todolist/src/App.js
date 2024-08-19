import "./App.css";
import { useState } from "react";

const App = () => {
  const [name, setName] = useState("Todo List");
  const [todoList, setTodoList] = useState([
    <li>팀프로젝트 준비</li>,
    <li>React 복습</li>,
    <li>Backend 예습</li>,
  ]);
  const onClickEvent = () => {
    setName("할일목록");
    console.log("클릭이벤트 발생", name);
  };
  return (
    <div className="todoList">
      <div className="App-header">
        <h1>{name} App</h1>
        {/* 중괄호 문자열 집어넣기가능 */}
      </div>
      <div className="input-title">
        <button onClick={onClickEvent}>Save</button>
        {/* 중괄호로 이벤트 함수 추가 가능 */}
      </div>
      <div className="list-body">
        {/* 여기다 집어넣는것은 동적으로 집어넣는 방법은 아니다 */}
        {/* ex) appendChild */}
        <ul>{todoList}</ul>
      </div>
    </div>
  );
};

export default App;
