import "./App.css";
import { useState } from "react";

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
  const [noCnt, setNoCnt] = useState(105);

  const [inputTitle, setInputTitle] = useState("");

  const onClickEvent = () => {
    // 기존 내용에 새 내용을 추가 해서 새 배열을 생성
    setTodoList([...todoList, { no: noCnt, title: inputTitle, done: false }]);
    setNoCnt(noCnt + 1);
    setInputTitle("");
  };

  const onChangeTitle = (e) => {
    setInputTitle(e.target.value);
  };

  const onDelete = ({ no, title, done }) => {
    const newList = todoList.filter((todo) => {
      return todo.no != no;
    });
    setTodoList(newList);
  };

  return (
    <div className="todoList">
      <div className="App-header">
        <h1>{name} App</h1>
      </div>
      <div className="input-title">
        <div className="container" style={{ padding: "10px" }}>
          <div className="input-group mb-3">
            <input
              value={inputTitle}
              onChange={onChangeTitle}
              type="text"
              className="form-control"
            />
            <div className="input-group-append">
              <button className="btn btn-success" onClick={onClickEvent}>
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="list-body">
        <div className="container">
          <table className="table table-hover">
            <thead>
              <tr style={{ textAlign: "center" }}>
                <th>Done</th>
                <th>Title</th>
                <th>Buttons</th>
              </tr>
            </thead>
            <tbody>
              {todoList.map((item) => {
                return (
                  <tr key={item.no}>
                    <td colSpan={3} style={{ padding: "0px" }}>
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <div className="input-group-text">
                            <input
                              type="checkbox"
                              checked={item.done && "checked"}
                            />
                          </div>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          readOnly
                          style={{
                            textDecoration: item.done && "line-through",
                          }}
                          value={item.title}
                        />
                        <div className="input-group-append">
                          <button className="btn btn-primary" type="button">
                            Edit
                          </button>
                          <button
                            onClick={() => {
                              onDelete(item);
                            }}
                            className="btn btn-danger"
                            type="button"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <ul></ul>
        </div>
      </div>
    </div>
  );
};

export default App;
