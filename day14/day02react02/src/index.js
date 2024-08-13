import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// const root = ReactDOM.createRoot(ServiceWorkerContainer);
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    {/* <p>
      <h2>hello</h2> <h3>hello</h3>
    </p> */}
    <App />
    <h2>안녕하세요</h2>
  </React.StrictMode>
);
