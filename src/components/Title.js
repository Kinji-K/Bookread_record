import Card from "react-bootstrap/Card"

const Title = () => {
  return(
    <div>
      <Card className="card">
        <h1>読書記録アプリ</h1>
      </Card>
      <Card className="card">
        <Card.Body>
          <h2>本アプリの説明</h2>
          <p>読書メーターのidをもとに、先月に読んだ本のタイトルと筆者を表にしてまとめるアプリです。</p>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Title;