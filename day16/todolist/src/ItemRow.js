const ItemRow = ({ item, onDoneFlag, onDoneFlag, onEdit }) => {
  const [flag, setFlag] = useState(true);
  const [outputTitle, setOutputTitle] = useState("");

  const lineThroughClass = {
    textDecoration: "line-through",
    color: "red",
  };

  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <div className="input-group-text">
          <input
            type="checkbox"
            onChange={() => {
              onDoneFlag(item);
            }}
            checked={item.done && "checked"}
          />
        </div>
      </div>
      <input
        type="text"
        className="form-control"
        readOnly={""}
        style={item.done ? lineThroughClass : {}}
        value={item.title}
        onChange={(e) => {
          setOutputTitle(e.target.value);
        }}
        onFocus={(e) => {
          // Focus, Blur로 수정 모션 넣어주자
          setFlag(true);
        }}
        onBlur={(e) => {
          console.log("blur");
          setFlag(false);
        }}
      />
      <div className="input-group-append">
        <button
          onClick={() => {
            onEdit(item);
          }}
          className="btn btn-primary"
          type="button"
        >
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
  );
};

export default ItemRow;
