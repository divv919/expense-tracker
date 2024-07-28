import React, { useState, useEffect } from 'react';
import { getExpenses, deleteExpense } from '../services/expenseService';
// import ExpenseItem from './ExpenseItem';

const ExpenseList = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    const { data } = await getExpenses();
    setExpenses(data);
  };

  const handleDelete = async (id) => {
    await deleteExpense(id);
    fetchExpenses();
  };


  return (
    <div>
      <h2>Expense List</h2>
      {expenses.map((expense) => (
        <div>
            {expense.description}: {expense.amount}
        </div>
      ))}
    </div>
  );
};

export default ExpenseList;
