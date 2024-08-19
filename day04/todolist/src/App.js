import "./App.css";
import {useState} from "react";

const App = ()=>{
    // 전역변수를 state로 만들어 주어야 re rendering 된다.
    // 구조분해 할당 = state변수, setter함수
    const [name, setName] = useState("Todo List");
    const [todoList, setTodoLilst] = useState([
        {no:101, title:"공부하기", done: false},
        {no:102, title:"자바하기", done: false},
        {no:103, title:"리액트하기", done: false},
        {no:104, title:"스프링하기", done: false}
    ]);
    const [noCnt, setNoCnt] = useState(105);

    const onClickEvent = () => {
        // 기존 내용에 새 내용을 추가 해서 새 배열을 생성
        setTodoLilst([...todoList, {no:noCnt, title:"점심하기", done: false}]);
        setNoCnt((cnt)=>cnt+1);
    }

    return (<div className="todoList">
        <div className="App-header">
            <h1>{name} App</h1>
        </div>
        <div className="input-title">
            <button onClick={onClickEvent}>Save</button>
        </div>
        <div className="list-body">
            <ul>
                {
                    // .map()은 새 배열을 반환한다.
                    // {} 없이 한줄에 사용하면 return 생략.
                    // Object내용을 list 태그로 변환 해서 새 배열 생성.
                    todoList.map((item)=> {
                        return (<li key={item.no}>
                            <input type="checkbox" />
                            {item.title}
                            <button>Edit</button>
                            <button>Delte</button>
                        </li>);
                    })
                }
            </ul>
        </div>
    </div>);
}

export default App;