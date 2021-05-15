import Button from 'react-bootstrap/Button';

const Form = (props) => {
  return (
    <form>
      <input type="text" name="ID" placeholder="読書メーターユーザーID" onChange={e => props.setId(e.target.value)}/>
      <Button type="submit" onClick={props.getData}>読書記録作成</Button>
    </form>
  );
};

export default Form;