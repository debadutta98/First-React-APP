import ExpenseIteam from "./Components/Expenses/ExpenseIteam";
import Card from "./Components/UI/Card";
import "./App.css";
import NewExpense from "./Components/NewExpense/NewExpense";
import ExpensesFilter from "./Components/Expenses/ExpenseFilter";
import { useState } from "react";
import ExpensesList from "./Components/Expenses/ExpensesList";
import ExpensesChart from "./Components/Expenses/ExpensesChart";
let Dummy_expense = [
  {
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
function App() {
  const [expenses, setExpenses] = useState(Dummy_expense);
  const [year, setYear] = useState("2020");
  const newExpenses = (expensedata) => {
    setExpenses([expensedata, ...expenses]);
  };
  let filtered = [];
  expenses.forEach((value) => {
    if (value.date.getFullYear().toString() === year) {
      filtered.push(value);
    }
  });
  const selectedYear = (year) => {
    setYear(year);
  };
 
  return (
    <div>
      <NewExpense onNewExpenses={newExpenses} />
      <Card className="expenses">
        <ExpensesFilter onSelectYear={selectedYear} select={year} />
        <ExpensesChart expenses={filtered}/>
            <ExpensesList filterIteam={filtered}/>
      </Card>
    </div>
  );
}

export default App;
