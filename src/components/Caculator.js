const Calculator = ({ persons, totalTips, taxMethod, updatePersonArray }) => {
    const calculateHandler = () => {
    let moneyAfterTaxes = 0;
    let hoursSum = 0;
    let taxes = 0;
    const taxM = parseInt(taxMethod);
    console.log(taxM);
    const money = totalTips;
    // Summarizing all of the persons' hours
    persons.forEach((person) => {
        const hours = parseInt(person.hoursSum);
        hoursSum += hours;
    });
  
    // Calculating the tax needed to be taken from the sum amount
    switch(taxM){
        case 0:{
            taxes = 0;
            const perHour = Math.floor(money / hoursSum);
            const newPersonArray = persons.map((person) => ({
                ...person,
                money: person.hoursSum * perHour,
            }));
            updatePersonArray(newPersonArray);

            break;
    }
    case 1:{
        for (let i = hoursSum; i > 0; i--) {
            taxes = taxes + 5;
        }
        moneyAfterTaxes = money - taxes;
        console.log("moneyAfterTaxes :" + moneyAfterTaxes);
        if(moneyAfterTaxes / hoursSum <= 30){
            moneyAfterTaxes = money;
            console.log("moneyAfterTaxes fixed : " + moneyAfterTaxes)
        }

        // flooring perHour so we won't have a lot of numbers after dot
        const perHour = Math.floor(moneyAfterTaxes / hoursSum);
  
        console.log("per Hour: " + perHour)
        const newPersonArray = persons.map((person) => ({
            ...person,
            money: person.hoursSum * perHour,
        }));
        updatePersonArray(newPersonArray);


        break;
    }
    case 2:{
        const perHour = Math.floor(money / hoursSum);
        const newPersonArray = persons.map((person) => ({
            ...person,
            money: Math.floor((person.hoursSum * perHour) * 0.93),
        }));
        updatePersonArray(newPersonArray);


        break;
    }
    default:
        break;
}
//   console.log(taxes);
//   console.log(hoursSum);
  

      
  
//   const perHour = Math.floor(moneyAfterTaxes / hoursSum);
  
//   const newPersonArray = persons.map((person) => ({
//     ...person,
//     money: person.hoursSum * perHour,
//   }));
  
    // TODO: Update the state or dispatch the calculated data

};
  
    return (
      <div>
        <button onClick={calculateHandler}>Calculate!</button>
      </div>
    );
  };

  export default Calculator;