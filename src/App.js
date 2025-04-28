import { useState } from 'react';
import ExpenseTable from './Components/ExpenseTable';
import ExpenseForm from './Components/ExpenseForm';
import SearchBar from './Components/SearchBar';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');

  // Add a new expense
  const addExpense = (expense) => {
    setExpenses([...expenses, { ...expense, id: Date.now() }]);
  };

  // Delete an expense
  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  // Handle sorting
  const handleSort = (field) => {
    const isAsc = sortField === field && sortOrder === 'asc';
    setSortField(field);
    setSortOrder(isAsc ? 'desc' : 'asc');

const sortedExpenses = [...expenses].sort((a, b) => {
  if (a[field] < b[field]) return isAsc ? 1 : -1;
  if (a[field] > b[field]) return isAsc ? -1 : 1;
  return 0;
});
setExpenses(sortedExpenses);
  };

  // Filter expenses based on search term
  const filteredExpenses = expenses.filter(
    (expense) =>
      expense.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      expense.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app-container">
      <h1>Expense Tracker</h1>
      <ExpenseForm onAddExpense={addExpense} />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ExpenseTable
        expenses={filteredExpenses}
        onDelete={deleteExpense}
        onSort={handleSort}
        sortField={sortField}
        sortOrder={sortOrder}
      />
    </div>
  );
}

export default App;