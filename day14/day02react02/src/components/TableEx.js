import "./App.css";

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
    <div className="container">
      <h1>Hello, World!</h1>
      <button className="btn btn-primary">Um..</button>
      <table class="table table-dark table-hover">
        <thead>
          <tr className={{ "text-align": "center" }}>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
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
        </tbody>
      </table>
    </div>
  );
};
export default App;
