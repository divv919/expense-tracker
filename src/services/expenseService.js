import axios from 'axios';

const API_URL = 'http://localhost:3000/api/expenses/user/66a0f108fc004db2a02d06bc';

export const getExpenses = () => {
  return axios.get(API_URL);
};

export const addExpense = (expense) => {
  return axios.post(API_URL, expense);
};

export const updateExpense = (id, expense) => {
  return axios.put(`${API_URL}/${id}`, expense);
};

export const deleteExpense = (id) => {
  return axios.delete(`http://localhost:3000/api/expenses/${id}`);
};
