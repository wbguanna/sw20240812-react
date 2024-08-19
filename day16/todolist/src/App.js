import "./App.css";

const App = () => {
  let name = "Todo List";

  const onClickEvent = () => {
    name = "할일목록";
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
        <ol>
          <li></li>
        </ol>
      </div>
    </div>
  );
};

export default App;
