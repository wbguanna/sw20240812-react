import "./App.css";
import from boot
// const Hello = () => {
//   return <h1>Hello, World!</h1>;
// };

// const App = () => {
//   return (
//     <>
//       <h3>Welcome</h3>
//       {/* <Hello /> */}
//     </>
//   );
// }; // 수식이 들어가 있으면

// 익명함수로도 사용이 가능하다
// +) react에서는 className을 지정하는 이유는
//    js에서 이미 class를 예약어로 사용하기 때문에

const App = () => {
  return (
    <div>
      <header className="jumbotron">
        <h1>Todo List</h1>
      </header>
      <div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Something clever.." />
  <div class="input-group-append">
    <button class="btn btn-primary" type="button">OK</button>
    <button class="btn btn-danger" type="button">Cancel</button>
  </div>
</div>
    {/* <div className="container"> */}
      
    {/* </div> */}
    </div>
  );
};
export default App;
