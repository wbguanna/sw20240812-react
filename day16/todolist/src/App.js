import "./App.css";
import { useState } from "react";

const App = () => {
  const [name, setName] = useState("Todo List");
  const [todoList, setTodoList] = useState([
    { no: 1, title: "Buy milk", done: false },
    { no: 2, title: "Bu milk", done: false },
    { no: 3, title: "B mlk", done: false },
    { no: 4, title: "uy ilk", done: false },
  ]);
  const [noCnt, setNoCnt] = useState(5);
  const [inputTitle, setInputTitle] = useState("");
  const onClickEvent = () => {
    setTodoList([...todoList, { no: noCnt, title: "점심먹기", done: false }]);
    setNoCnt(noCnt + 1);
    setInputTitle("");
  };

  const onChangeTitle = (e) => {
    setInputTitle(e.target.value);
  };

  const onDelete = ({ no, title, done }) => {
    console.dir(no);
    const newList = todoList.filter((todo) => {
      return todo.no != no;
    });
  };
  return (
    <div className="todoList">
      <div className="App-header">
        <h1>{name} App</h1>
        {/* 중괄호 문자열 집어넣기가능 */}
      </div>
      <div className="input-title">
        {/* <button onClick={onClickEvent}>Save</button> */}
        {/* 중괄호로 이벤트 함수 추가 가능 */}
        <div class="input-group mb-3">
          <input
            type="text"
            onChange={onChangeTitle}
            class="form-control"
            placeholder="할일 입력"
          />
          <div class="input-group-append">
            <button class="btn btn-success" type="submit">
              Save
            </button>
          </div>
        </div>
      </div>
      <div className="list-body">
        {/* 여기다 집어넣는것은 동적으로 집어넣는 방법은 아니다 */}
        {/* ex) appendChild */}
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Email</th>
            </tr>
          </thead>
          {/* <tbody>
            <tr>
              <td>John</td>
              <td>Doe</td>
              <td>john@example.com</td>
            </tr>
            <tr>
              <td>Mary</td>
              <td>Moe</td>
              <td>mary@example.com</td>
            </tr>
            <tr>
              <td>July</td>
              <td>Dooley</td>
              <td>july@example.com</td>
            </tr>
          </tbody> */}
          <tbody>
            {todoList.map((item) => {
              return (
                <tr key={item.no}>
                  {/* <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                  <td className="btn-group">
                    <button btn btn-primary>
                      edit
                    </button>
                    <button btn btn-primary>
                      delete
                    </button>
                  </td>
                  <td>{item.title}</td> */}
                  <td colSpan={3} style={{ padding: "0px" }}>
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <div className="input-group-text">
                          <input type="checkbox" />
                        </div>
                        <input type="" />
                        <div className="btn-group">
                          <button className="btn btn-primary">ok</button>

                          <button
                            onClick={(e) => {
                              onDelete(e);
                            }}
                            className="btn btn-danger"
                          >
                            cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <ul>
          {todoList.map((item) => {
            // return item;
            // return JSON.stringify(item);
            return (
              <li>
                <input type="checkbox" />
                <span>{item.title}</span>
                <button>edit</button>
                <button>X</button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default App;
