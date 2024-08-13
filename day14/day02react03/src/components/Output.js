export default (props) => {
  //   const todoListArr = [];
  //   if (props.todoListArr) {
  //     todoListArr = props.todoListArr;
  //   }

  //   console.dir(props.todoListArr);
  //   let [todoListArr] = props;

  console.dir(props.props);
  const todoListArr = props.props;
  return (
    <div>
      <table className="table table-hover">
        <thead>
          <tr style={{ textAlign: "center" }}>
            <th>Confirm</th>
            <th>Titme</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todoListArr.map((item) => {
            //중괄호  enter 하면 return 문을 꼭 넣어야한다.
            return (
              <tr key={item.no}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>{item.title}</td>
                <td className="btn-group">
                  <button className="btn btn-secondary">edit</button>
                  <button className="btn btn-emergency">x</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
