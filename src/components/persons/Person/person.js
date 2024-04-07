import './person.css'
import  Card  from 'react-bootstrap/Card'
const Person = (props) => {

    const updateDataHandler = (e) => {
        props.sendData(e.target.value, props.id)
    }

    return(
        <Card className="card">
            <Card.Img variant="top" src="user.png" />
            <Card.Body>
      </Card.Body>
            <div className="container">
                <label>Enter name</label>
                <p><input type="text" /></p>
                <label>Enter Hours Sum</label>
                <p><input onChange={updateDataHandler} type="number"/></p>
                <h4>{props.money === 0 ? "" : props.money}</h4>
            </div>
        </Card>
    )
}
export default Person;