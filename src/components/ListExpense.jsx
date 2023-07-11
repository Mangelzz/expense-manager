import Expense from "./Expense";

const ListExpense = ({
  expenses,
  setEditExpenses,
  deleteExpense,
  filter,
  filterExpenses,
}) => {
  return (
    <div className="listado-gastos contenedor">
      {filter ? (
        <>
          <h2>
            {filterExpenses.length
              ? "Expenses"
              : "there are no expenses in this category"}
          </h2>
          {filterExpenses.map((expense) => (
            <Expense
              key={expense.id}
              expense={expense}
              setEditExpenses={setEditExpenses}
              deleteExpense={deleteExpense}
            />
          ))}
        </>
      ) : (
        <>
          <h2>
            {expenses.length
              ? "Expenses"
              : "there are no expenses yet"}
          </h2>
          {expenses.map((expense) => (
            <Expense
              key={expense.id}
              expense={expense}
              setEditExpenses={setEditExpenses}
              deleteExpense={deleteExpense}
            />
          ))}
        </>
      )}
    </div>
  );
};
export default ListExpense;
