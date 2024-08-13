export default () => {
  //   const todoListArr = [
  //     <tr>
  //     <td>July</td>
  //     <td>Dooley</td>
  //     <td>july@example.com</td>
  //   </tr>

  //   ];

  const todoListArr = [
    { no: 101, title: "운동하기", done: false },
    { no: 102, title: "운동하기2", done: false },
    { no: 103, title: "운동하기3", done: false },
  ];

  return (
    <div>
      <table class="table table-hover">
        <thead>
          <tr style={{ textAlign: "center" }}>
            <th>Confirm</th>
            <th>Titme</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todoListArr.map((item, idx) => {
            //중괄호  enter 하면 return 문을 꼭 넣어야한다.
            return (
              <tr>
                <td>{item.no}</td>
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
