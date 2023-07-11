import ControlBudget from "./ControlBudget"
import NewExpense from "./NewExpense"

const Header = ({ budget, setBudget, isValid, setIsValid, expenses, setExpenses }) => {
  return (
    <header>
      <h1>Expense planner</h1>

      {isValid ? (
        <ControlBudget 
          expenses={expenses}
          setExpenses={setExpenses}
          budget={budget}
          setBudget={setBudget}
          setIsValid={setIsValid}
        />
      ): (
        <NewExpense
          budget={budget}
          setBudget={setBudget}
          setIsValid={setIsValid}
        />
      )}
    </header>
  )
}

export default Header