import "./App.css";
import { useEffect, useState } from "react";
import ItemRow from "./ItemRow";
import { Input } from "./Input";
import Output from "./Output";
import axios from "axios";

const App = () => {
  // 전역변수를 state로 만들어 주어야 re rendering 된다.
  // 구조분해 할당 = state변수, setter함수
  const [name, setName] = useState("Todo List");
  const [todoList, setTodoList] = useState([
    { no: 101, title: "공부하기", done: false },
    { no: 102, title: "자바하기", done: true },
    { no: 103, title: "리액트하기", done: false },
    { no: 104, title: "스프링하기", done: false },
  ]);

  // useEffect() 훅 - 렌더링 되는 것과 비동기로 작동한다.
  // 최초 한번만 실행됨.
  // 훅은 콜백함수 내부에 포함 될 수 없다.
  // 그래서 useEffect() 훅 내부에서 axios를 이용해서 처리.
  useEffect(() => {
    axios.get("http://localhost:5000/todo").then(function (res) {
      console.log(res);
      setTodoList(res["data"]);
    });
  }, []);
  const [noCnt, setNoCnt] = useState(105);

  const [outputTitle, setOutputTtile] = useState("");

  const [flag, setFlag] = useState(false);

  const onClickEvent = (inputTitle) => {
    // 기존 내용에 새 내용을 추가 해서 새 배열을 생성
    setTodoList([...todoList, { no: noCnt, title: inputTitle, done: false }]);
    setNoCnt(noCnt + 1);
  };

  const onDelete = ({ no, title, done }) => {
    const newList = todoList.filter((todo) => {
      return todo.no != no;
    });
    setTodoList(newList);
  };

  const onDoneFlag = ({ no, title, done }) => {
    const newTodoList = [...todoList];
    todoList.forEach((item, idx) => {
      if (item.no == no) {
        newTodoList[idx].done = !done;
      }
    });
    setTodoList(newTodoList);
  };

  const onEdit = ({ no, title, done }) => {
    const newTodoList = [...todoList];
    todoList.forEach((item, idx) => {
      if (item.no == no) {
        newTodoList[idx].done = done;
        newTodoList[idx].title = title;
      }
    });
    setTodoList(newTodoList);
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
