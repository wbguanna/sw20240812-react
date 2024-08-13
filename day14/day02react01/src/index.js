import React from "react";
import ReactDOM from "react-dom/client";

const Hello = () => {
  return <h1>Hello, World!</h1>;
};

const App = () => {
  return (
    <>
      <h3>Welcome</h3>
      <Hello />
    </>
  );
}; // 수식이 들어가 있으면

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <p>
      <h2>hello</h2> <h3>hello</h3>
    </p> */}
    <App />
  </React.StrictMode>
);
