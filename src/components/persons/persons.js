import Person from "./Person/person";

const Persons = (props) => props.persons.map((person,index) => {


    const transferData = (childData,id) =>{
        props.sendHours(childData,id);
    }

    return <Person
    key={index}
    id={person.id}
    name={person.name}
    hoursSum={person.hoursSum}
    money={person.money}
    sendData={transferData}></Person>
});
    
export default Persons;
    
