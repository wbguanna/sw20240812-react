export default () => {
    return (<div>
        <table id="todoListTbl" class="table table-hover">
            <thead>
                <tr style={{textAlign:"center"}}>
                    <th>Confirm</th>
                    <th>Titme</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <input type="checkbox"></input>
                    </td>
                    <td>미니프로젝트 만들기</td>
                    <td>
                        <button class="btn btn-danger" type="button">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>);
}