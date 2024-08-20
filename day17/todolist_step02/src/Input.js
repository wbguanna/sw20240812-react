import { useRef, useState } from "react";

const Input = ({ onClickEvent }) => {
  const [inputTitle, setInputTitle] = useState("");

  // 훅은 콜백함수에 포함 될 수 없다.
  const inputFocus = useRef(null);

  return (
    <div className="input-title">
      <div className="container" style={{ padding: "10px" }}>
        <div className="input-group mb-3">
          <input
            value={inputTitle}
            onChange={(e) => {
              setInputTitle(e.target.value);
            }}
            type="text"
            className="form-control"
            ref={inputFocus}
          />
          <div className="input-group-append">
            <button
              className="btn btn-success"
              onClick={(e) => {
                if (inputTitle === null || inputTitle === "") {
                  alert("내용이 없습니다!"); // alert 말고 tooltip
                  inputFocus.current.focus();
                  return;
                }
                onClickEvent(inputTitle);
                setInputTitle("");
                // console.dir(e.target);
                // useRef 훅을 사용해 focus 를 잡아준다.
                inputFocus.current.focus();
                console.dir(inputFocus.current);
              }}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const InputSub = () => {
  return <></>;
};

// export default Input;

export { Input, InputSub };
