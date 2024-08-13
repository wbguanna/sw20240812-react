export default ({ appendItem }) => {
  // 구조분해 할당 기호: 배열 [], 객체는 {}
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Something clever.."
      />
      <div className="input-group-append">
        <button
          onClick={() => {
            appendItem("새 할일");
          }}
          className="btn btn-primary"
          type="button"
        >
          OK
        </button>
        <button className="btn btn-danger" type="button">
          Cancel
        </button>
      </div>
    </div>
  );
};
