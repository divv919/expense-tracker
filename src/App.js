import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ExpenseList from './components/ExpenseList';
import axios from 'axios';
import {getExpenses} from './services/expenseService';
import InteractiveList from './components/InteractiveList';
import ExpenseChart from './components/ExpenseChart';
import './App.css';




function App() {
  const [expenses, setExpenses] = useState([]);
  const [refreshCount, setRefreshCount] = useState(0);

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    const { data } = await getExpenses();
    setExpenses(data);
  };

  return (
    <div className="App">
      <div className="content">
        <div className="left">
          <InteractiveList expenses={expenses} setRefreshCount={setRefreshCount} />
        </div>
        <div className="right">
          <ExpenseChart expenses={expenses} refreshCount={refreshCount}/>
        </div>
      </div>
    </div>
  );
}

export default App;
