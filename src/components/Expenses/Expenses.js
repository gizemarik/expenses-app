import React, {useState} from 'react';
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020')
  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  }
  const filteredExpenses = props?.items?.filter(expense => {
    return expense?.date?.getFullYear().toString() === filteredYear;
  });

  let expenseContent = <p>No expenses found.</p>;
   if(filteredExpenses?.length > 0) {
    expenseContent = filteredExpenses.map((expense => <ExpenseItem key={expense?.id}
      title={expense?.title}
      date={expense?.date} amount={expense?.amount} />));
   }
  return (
    <div>
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      {expenseContent}
    </Card>
    </div>
  );
}
export default Expenses;
