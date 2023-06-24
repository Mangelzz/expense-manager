import Expense from "./Expense";

const ListExpense = ({ expenses }) => {
  return (
    <div className="listado-gastos contenedor">
      <h2>{expenses.length ? "Expenses" : "there are no expenses yet"}</h2>
      {expenses.map((expense) => (
        <Expense key={expense.id} expense={expense} />
      ))}
    </div>
  );
};
export default ListExpense;
