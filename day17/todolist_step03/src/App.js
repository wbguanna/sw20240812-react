import "./App.css";
import { useState } from "react";
import ItemRow from "./ItemRow";
import { Input } from "./Input";
import Output from "./Output";

const App = () => {
  // 전역변수를 state로 만들어 주어야 re rendering 된다.
  // 구조분해 할당 = state변수, setter함수
  const [name, setName] = useState("Todo List");
  const [todoList, setTodoLilst] = useState([
    { no: 101, title: "공부하기", done: false },
    { no: 102, title: "자바하기", done: true },
    { no: 103, title: "리액트하기", done: false },
    { no: 104, title: "스프링하기", done: false },
  ]);
  const [noCnt, setNoCnt] = useState(105);

  const [outputTitle, setOutputTtile] = useState("");

  const [flag, setFlag] = useState(false);

  const onClickEvent = (inputTitle) => {
    // 기존 내용에 새 내용을 추가 해서 새 배열을 생성
    setTodoLilst([...todoList, { no: noCnt, title: inputTitle, done: false }]);
    setNoCnt(noCnt + 1);
  };

  const onDelete = ({ no, title, done }) => {
    const newList = todoList.filter((todo) => {
      return todo.no != no;
    });
    setTodoLilst(newList);
  };

  const onDoneFlag = ({ no, title, done }) => {
    const newTodoList = [...todoList];
    todoList.forEach((item, idx) => {
      if (item.no == no) {
        newTodoList[idx].done = !done;
      }
    });
    setTodoLilst(newTodoList);
  };

  const onEdit = ({ no, title, done }) => {
    const newTodoList = [...todoList];
    todoList.forEach((item, idx) => {
      if (item.no == no) {
        newTodoList[idx].done = done;
        newTodoList[idx].title = title;
      }
    });
    setTodoLilst(newTodoList);
    console.log(newTodoList);
  };

  // 취소선 스타일 설정
  const lineThroughClass = { textDecoration: "line-through", color: "blue" };

  return (
    <div className="todoList">
      <div className="App-header">
        <h1>{name} App</h1>
      </div>
      {/* Input 컴포넌트 위치 */}
      <Input onClickEvent={onClickEvent} />

      {/* Output 컴포넌트 위치 list-body */}
      {/* todoList가 출력된다 */}
      <Output
        todoList={todoList}
        onDoneFlag={onDoneFlag}
        onDelete={onDelete}
        onEdit={onEdit}
      />
    </div>
  );
};

export default App;
