import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";
function NewExpense(props) {
  const [showCard, setShowCard] = useState(false);
  const onAddClick = () => {
    setShowCard(true);
  };
  const onCancelClick = () => {
    setShowCard(false);
  };
  const saveExpenseData = (expenseData) => {
    props.onNewExpenses(expenseData);
    //console.log(expenseData);
  };
  return (
    <div className="new-expense">
      {!showCard && <div><button onClick={onAddClick}>Add Expenses</button></div>}
      {showCard && <ExpenseForm onSaveExpenseData={saveExpenseData} onChange={onCancelClick}/>}
    </div>
  );
}
export default NewExpense;
