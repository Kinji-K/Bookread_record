import Card from "react-bootstrap/Card"
import Table from "react-bootstrap/Table"

const Results = (props) => {

  let bookdata = [];

  for (let i=0;i<props.name.length;i++){
    bookdata.push({
      name: props.name[i],
      author: props.author[i]
    })
  }

  return(
    <div>
      <Card>
        <Card.Body>
          <Table striped bordered className="tables">
            <thead>
            <tr>
              <th>タイトル</th>
              <th>筆者</th>
            </tr>
            </thead>
            <tbody>
            {bookdata.map((data) => (
              <tr>
                <td>{data.name}</td><td>{data.author}</td>
              </tr>
            ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Results;