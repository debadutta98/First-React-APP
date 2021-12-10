import { useState } from "react";
import AddExpenses from "./AddExpenses";
import "./ExpenseForm.css";
function ExpenseForm(props) {
  const [enteredTitle, setEntedTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  /*
we can write all these above statement in just one useState
const [userInput,setUserInput]=useState({
  enteredTitle:'',
  enteredAmount:'',
  enteredDate:''
})

  */
  const setTitleHandler = (event) => {
    setEntedTitle(event.target.value);
    /*
   setUserInput({
     ...userInput,
     enteredTitle:event.target.value
   })
   The more appropreate is using a callback function using setUserInput
   setUserInput((previousState)=>{
     return {
       ...previousState,
       enteredTitle:event.target.value
     }
   })
  */
  };
  const setAmountHandler = (event) => {
    setEnteredAmount(event.target.value);
    /*
   setUserInput({
     ...userInput,
     enteredAmount:event.target.value
   })
  */
  };
  const setDateHandler = (event) => {
    setEnteredDate(event.target.value);
    /*
   setUserInput({
     ...userInput,
     enteredDate:event.target.value
   })
  */
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate)
    };
    props.onSaveExpenseData(expenseData);
    console.log(expenseData);
    setEntedTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  return (
 
        <form onSubmit={submitHandler}>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Title</label>
              <input
                type="text"
                onChange={setTitleHandler}
                value={enteredTitle}
              />
            </div>
            <div className="new-expense__control">
              <label>Amount</label>
              <input
                type="number"
                min="0.01"
                max="100"
                onChange={setAmountHandler}
                value={enteredAmount}
              />
            </div>
            <div className="new-expense__control">
              <label>Date</label>
              <input
                type="date"
                min="2019-01-01"
                max="2022-12-31"
                onChange={setDateHandler}
                value={enteredDate}
              />
            </div>
          </div>
          <div className="new-expense__actions">
            <button type="button" onClick={props.onChange}>
              Cancel
            </button>
            <button type="submit">Add Expenses</button>
          </div>
        </form>
  );
}
export default ExpenseForm;
