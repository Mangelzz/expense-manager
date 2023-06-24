import ControlBudget from "./ControlBudget"
import NewExpense from "./NewExpense"

const Header = ({ budget, setBudget, isValid, setIsValid, expenses }) => {
  return (
    <header>
      <h1>Expense planner</h1>

      {isValid ? (
        <ControlBudget 
          expenses={expenses}
          budget={budget}
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