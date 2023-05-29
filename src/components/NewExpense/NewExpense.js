import React, {useState} from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [addNewExpenseStatus, setAddNewExpenseStatus] = useState(false)
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
        ...enteredExpenseData,
        id: Math.random().toString()
    }
    props.onAddExpense(expenseData);
  };

  const changeNewExpenseStatusHandler = () => {
    setAddNewExpenseStatus(false);
  }
  
  return (
    <div className="new-expense">
      {addNewExpenseStatus ? (
        <ExpenseForm onChangeFormStatus={changeNewExpenseStatusHandler} onSaveExpenseData={saveExpenseDataHandler} />
      ) : (
        <button onClick={() => setAddNewExpenseStatus(true)}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
