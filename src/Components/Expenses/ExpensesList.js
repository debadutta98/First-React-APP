import "./ExpensesList.css";
import ExpenseIteam from "./ExpenseIteam";
function  ExpensesList(props) {
     let expenseIteam = [];
    props.filterIteam.forEach((value, index) => {
      expenseIteam.push(
        <ExpenseIteam
          key={index}
          title={value.title}
          amount={value.amount}
          date={value.date}
        ></ExpenseIteam>
      );
    });
    if(props.filterIteam.length===0)
    {
    return <h2 className="expenses-list__fallback">No Data found</h2>;
    }
    return (<ul className="expenses-list">
        {expenseIteam}
    </ul>)
}
export default ExpensesList;