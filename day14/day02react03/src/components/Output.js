export default () => {
  //   const todoListArr = [
  //     <tr>
  //     <td>July</td>
  //     <td>Dooley</td>
  //     <td>july@example.com</td>
  //   </tr>

  //   ];

  const todoListArr = [
    <tr>
      <td colSpan={3}>미니프로젝트 만들기1</td>
    </tr>,
    <tr>
      <td colSpan={3}>미니프로젝트 만들기1</td>
    </tr>,
    <tr>
      <td colSpan={3}>미니프로젝트 만들기1</td>
    </tr>,
    <tr>
      <td colSpan={3}>미니프로젝트 만들기1</td>
    </tr>,
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
        <tbody>{todoListArr}</tbody>
      </table>
    </div>
  );
};
