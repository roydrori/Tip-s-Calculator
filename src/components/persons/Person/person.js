import './person.css'
const Person = (props) => {

    const updateDataHandler = (e) => {
        props.sendData(e.target.value, props.id)
    }

    return(
        <div className="card">
            <img src="user.png" alt="avatar" />
            <div className="container">
                <label>Enter name</label>
                <p><input type="text" /></p>
                <label>Enter Hours Sum</label>
                <p><input onChange={updateDataHandler} type="number"/></p>
                <h4>{props.money === 0 ? "" : props.money}</h4>
            </div>
        </div>
    )
}
export default Person;