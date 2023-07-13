import './App.css';
import {useState, useReducer} from 'react';
import Calculator from '../components/Caculator';
import Persons from '../components/persons/persons';


const reducer = (state, action) => {
  switch (action.type){
    case "SUMMERIZE":
      return{

      }
      
  }
}

function App() {
  const [personsState, setPersonsState] = useState({
    persons: [
      {id: 0,name: 'name', hoursSum: 0, money: ""}
    ]
  })
  const [state, dispatch] = useReducer(reducer, {totalTips: 0, taxMethod :0})
  const[totalTips, setTotalTips] = useState(0);
  const[taxMethod, setTaxMethod] = useState(0);

  const totalTipsChangeHandler = (e) => {
    setTotalTips(e.target.value);
  }


  const addPersonHandler = () => {
    const newPersonId = personsState.persons.length > 0 ? personsState.persons[personsState.persons.length - 1].id + 1 : 0;
  
    const newPerson = {
      id: newPersonId,
      name: 'new name',
      hoursSum: 0
    };
  
    setPersonsState(prevState => ({
      persons: [...prevState.persons, newPerson]
    }));
  };
  
  
  const DeletePersonHandler = () => {
    const updatedPersons = personsState.persons.slice(0, -1);
    setPersonsState({ persons: updatedPersons });
  }


  const updatePersonHandler = (childData, id) => {
    if (childData === null) {
      childData = 0;
    }
    console.log('id:', id);
  
    const updatedPersons = [...personsState.persons];
    updatedPersons[id].hoursSum = childData;
    setPersonsState({ persons: updatedPersons });
  };
  
  
  const setTaxHandler = (e) => {
    setTaxMethod(e.target.value);
  }

  const updatePersonArray = (newArray) => {
    setPersonsState({persons: newArray});
  }
  
  return (
    <div className="App">
      <div className="fronthead">
            <h1>Tip's Calculator</h1>
            <div>
                <label>Enter total tips money</label>
                <input type="number" onChange={totalTipsChangeHandler}/>
            </div>
        </div>
      <Persons persons={personsState.persons} sendHours={updatePersonHandler}/>
      <div>
        <label>Tax method</label>
        <br/>
        <select onChange={setTaxHandler}>
          <option value={0}>None</option>
          <option value={1}>5 per hour</option>
          <option value={2}>7%</option>
        </select>
      </div>
      <div className='buttons'>
        <button className='AddMorePerson' onClick={addPersonHandler}>Add More Waiter</button>
        <button className='deletePerson' onClick={DeletePersonHandler}>Delete Waiter</button>
        <Calculator persons={personsState.persons} totalTips={totalTips} taxMethod={taxMethod} updatePersonArray={updatePersonArray} />
      </div>
    </div>
  );
}

export default App;
