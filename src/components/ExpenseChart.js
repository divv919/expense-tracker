import React, { useState, useEffect } from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

// TODO: get correct user id
const USER_ID = "66a0f108fc004db2a02d06bc"

const ExpenseChart = ({refreshCount}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch expenses from the backend
    const fetchExpenses = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/expenses/user/${USER_ID}`);
        const expenses = await response.json();
        processExpensesData(expenses);
      } catch (error) {
        console.error('Error fetching expenses:', error);
      }
    };

    fetchExpenses();
  }, [refreshCount]);

  const processExpensesData = (expenses) => {
    const categories = ['Food', 'Transport', 'Utilities', 'Entertainment', 'Health', 'Other'];
    const categoryTotals = categories.reduce((totals, category) => {
      totals[category] = 0;
      return totals;
    }, {});

    expenses.forEach(expense => {
      if (categoryTotals[expense.category] !== undefined) {
        categoryTotals[expense.category] += expense.amount;
      }
    });

    const chartData = Object.keys(categoryTotals).map((category, index) => ({
      id: index,
      value: categoryTotals[category],
      label: category
    }));

    setData(chartData);
  };

  return (
    <PieChart
      series={[
        {
          data,
          highlightScope: { faded: 'global', highlighted: 'item' },
          faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
        },
      ]}
      height={200}
    />
  );
};

export default ExpenseChart;
