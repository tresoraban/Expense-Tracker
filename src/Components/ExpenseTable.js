function ExpenseTable({ expenses, onDelete, onSort, sortField, sortOrder }) {
    const handleSortClick = (field) => {
      onSort(field);
    };
  
    return (
      <table className="expense-table">
        <thead>
          <tr>
            <th onClick={() => handleSortClick('description')}>
              Description {sortField === 'description' && (sortOrder === 'asc' ? '↑' : '↓')}
            </th>
            <th>Amount</th>
            <th onClick={() => handleSortClick('category')}>
              Category {sortField === 'category' && (sortOrder === 'asc' ? '↑' : '↓')}
            </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {expenses.length === 0 ? (
            <tr>
              <td colSpan="4">No expenses found.</td>
            </tr>
          ) : (
            expenses.map((expense) => (
              <tr key={expense.id}>
                <td>{expense.description}</td>
                <td>${expense.amount.toFixed(2)}</td>
                <td>{expense.category}</td>
                <td>
                  <button onClick={() => onDelete(expense.id)}>Delete</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    );
  }
  
  export default ExpenseTable;
  
  