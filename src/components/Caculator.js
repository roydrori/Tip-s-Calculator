import { useState } from "react";
import  Button  from "react-bootstrap/Button";
const Calculator = ({ persons, totalTips, taxMethod, updatePersonArray, sendData }) => {

    const[MoneyPerHour, SetMoneyPerHour] = useState(0);
    const[TaxesTotal, SetTaxesTotal] = useState(0);

    const sendDataToParant = () => {
        sendData(MoneyPerHour, TaxesTotal);
    }


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
            SetMoneyPerHour(perHour);
            SetTaxesTotal(taxes);
            const newPersonArray = persons.map((person) => ({
                ...person,
                money: person.hoursSum * perHour,
            }));
            updatePersonArray(newPersonArray);
            sendDataToParant();
            break;
    }
    case 1:{
        for (let i = hoursSum; i > 0; i--) {
            taxes = taxes + 5;
        }
        moneyAfterTaxes = money - taxes;
        console.log("moneyAfterTaxes :" + moneyAfterTaxes);
        if(moneyAfterTaxes / hoursSum <= 30){
            taxes = 0;
            moneyAfterTaxes = money;
            console.log("moneyAfterTaxes fixed : " + moneyAfterTaxes)
        }
        SetTaxesTotal(taxes);
        // flooring perHour so we won't have a lot of numbers after dot
        const perHour = Math.floor(moneyAfterTaxes / hoursSum);
        SetMoneyPerHour(perHour);
        console.log("per Hour: " + perHour)
        const newPersonArray = persons.map((person) => ({
            ...person,
            money: person.hoursSum * perHour,
        }));
        updatePersonArray(newPersonArray);
        sendDataToParant();

        break;
    }
    case 2:{
        const perHour = Math.floor(money / hoursSum);
        SetMoneyPerHour(perHour);
        let TaxFloorCounter = 0.0;

        const newPersonArray = persons.map((person) => {
            let taxPerLoop = Math.floor((person.hoursSum * perHour) * 0.93);
            TaxFloorCounter = TaxFloorCounter + (Math.floor((person.hoursSum * perHour) * 0.07));
            return {
              ...person,
              money: taxPerLoop
            };
        });
        updatePersonArray(newPersonArray);
        SetTaxesTotal(TaxFloorCounter);
        TaxFloorCounter = 0;
        console.log("per Hour: " + perHour)
        sendDataToParant();

        break;
    }
    default:{break;}

}

};
  
    return (
      <div>
        <Button className="calculator" onClick={calculateHandler}>Calculate!</Button>
      </div>
    );
  };

  export default Calculator;