import Calculator from '../../components/Caculator';
import Persons from '../../components/persons/persons';
import Button from 'react-bootstrap/Button';
import {useReducer, useState} from 'react';
import { HomePageReducer, initialState } from './HomePageReducer';
import  Alert  from 'react-bootstrap/Alert';
import '../../container/App.css'

const HomePage = () => {
    const [personsState, setPersonsState] = useState({
        persons: [
          {id: 0,name: 'name', hoursSum: 0, money: ""}
        ]
      })
      // const [state, dispatch] = useReducer(HomePageReducer, initialState);

      // const { totalTips, taxMethod, taxAmount, perHour, numberOfWwaiters } = state;

      const[totalTips, setTotalTips] = useState(0);
      const[taxMethod, setTaxMethod] = useState(0);
      const[taxAmount, setTaxAmount] = useState(0);
      const[perHour, setPerHour] = useState(0);
      const[numberOfWwaiters, setNumberOfWaiters] = useState(1);
    
      const totalTipsChangeHandler = (e) => {
        setTotalTips(e.target.value);
      }
    
    
      const addPersonHandler = () => {
        const newPersonId = personsState.persons.length > 0 ? personsState.persons[personsState.persons.length - 1].id + 1 : 0;
        // setNumberOfWaiters(numberOfWwaiters + 1);
        const newPerson = {
          id: newPersonId,
          name: 'new name',
          hoursSum: 0
        };

        // try{
        //   dispatch("SET_NUMBER_OF_WAITERS", newPerson.id);
        // }
        // catch(err){
        //   console.log(err.message);
        // }
      
        setPersonsState(prevState => ({
          persons: [...prevState.persons, newPerson]
        }));
        setNumberOfWaiters(numberOfWwaiters+1);

        console.log(numberOfWwaiters);
      };
      
      
      const DeletePersonHandler = () => {
        console.log(numberOfWwaiters);
        if(numberOfWwaiters >= 2){
          const updatedPersons = personsState.persons.slice(0, -1);
          // setNumberOfWaiters(numberOfWwaiters - 1);
          setPersonsState({ persons: updatedPersons });
          setNumberOfWaiters(numberOfWwaiters-1);
        }
        else{
          alert("can't have 0 waiters");
        }
      }
    
    
      const updatePersonHandler = (childData, id) => {
        if (childData === null) {
          childData = 0;
        }
        console.log('id:', id);
      
        const updatedPersons = [...personsState.persons];
        updatedPersons[id].hoursSum = childData;
        setPersonsState({ persons: updatedPersons });
        console.log(updatedPersons)
      };
      
      const sentDataHandler = (perHour, taxTotal) => {
        setPerHour(perHour);
        setTaxAmount(taxTotal);
      }
    
      const setTaxHandler = (e) => {
        setTaxMethod(e.target.value);
      }
    
      const updatePersonArray = (newArray) => {
        setPersonsState({persons: newArray});
      }
      
      return (
        <div className="App">
          <div className="fronthead">
                <h1>Tip Calculator</h1>
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
            <Button className='AddMorePerson' onClick={addPersonHandler}>Add More Waiter</Button>
            <Button className='deletePerson' onClick={DeletePersonHandler}>Delete Waiter</Button>
            <Calculator persons={personsState.persons} totalTips={totalTips} taxMethod={taxMethod} updatePersonArray={updatePersonArray} sendData={sentDataHandler} />
          </div>
          <br></br>
          <h2>Stats</h2>
        <div className="side-stats-bar">
          <div className="stats-row">
            <p>Number of waiters: {numberOfWwaiters}</p>
          </div>
          <div className="stats-row">
            <p>Per Hour: {perHour}</p>
          </div>
          <div className="stats-row">
            <p>Taxes: {taxAmount}</p>
        </div>
        </div>
          <div>
            <p>While calculating the amount, the wage for every waiter per hour is being rounded down after the decimal point.</p>
          </div>
        </div>
      );
}

export default HomePage;