import { useEffect, useState } from "react";
import Header from "./components/Header";
import newConsume from "./img/nuevo-gasto.svg";
import { generateId } from "./helpers/index";
import Modal from "./components/Modal";
import ListExpense from "./components/ListExpense";
import Filters from "./components/Filters";

const App = () => {
  const [expenses, setExpenses] = useState([
    ...(JSON.parse(localStorage.getItem("expenses")) ?? []),
  ]);

  const [budget, setBudget] = useState(
    Number(localStorage.getItem("budget")) ?? 0
  );
  const [isValid, setIsValid] = useState(false);

  const [modal, setModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);

  const [editExpenses, setEditExpenses] = useState({});

  const [filter, setFilter] = useState("");
  const [filterExpenses, setFilterExpenses] = useState([]);

  useEffect(() => {
    if (Object.keys(editExpenses).length > 0) {
      setModal(true);
      setTimeout(() => {
        setAnimateModal(true);
      }, 500);
    }
  }, [editExpenses]);

  useEffect(() => {
    localStorage.setItem("budget", budget ?? 0);
  }, [budget]);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses) ?? []);
  }, [expenses]);

  useEffect(() => {
    if (filter) {
      const filterExpenses = expenses.filter(
        (expense) => expense.category === filter
      );
      setFilterExpenses(filterExpenses)
    }
  }, [filter]);

  useEffect(() => {
    const budgetLS = Number(localStorage.getItem("budget")) ?? 0;

    if (budgetLS > 0) {
      setIsValid(true);
    }
  }, []);

  const handleNewConsume = () => {
    setModal(true);
    setEditExpenses({});
    setTimeout(() => {
      setAnimateModal(true);
    }, 500);
  };

  const saveExpense = (expense) => {
    if (expense.id) {
      //Update
      const updatedExpenses = expenses.map((expenseState) =>
        expenseState.id === expense.id ? expense : expenseState
      );
      setExpenses(updatedExpenses);
      setEditExpenses({});
    } else {
      //New expense
      expense.id = generateId();
      expense.date = Date.now();
      setExpenses([...expenses, expense]);
    }

    setAnimateModal(false);
    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  const deleteExpense = (id) => {
    const deleteExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(deleteExpenses);
  };

  return (
    <div className={modal ? "fijar" : ""}>
      <Header
        expenses={expenses}
        setExpenses={setExpenses}
        budget={budget}
        setBudget={setBudget}
        isValid={isValid}
        setIsValid={setIsValid}
      />

      {isValid && (
        <>
          <main>
            <Filters filter={filter} setFilter={setFilter} />
            <ListExpense
              expenses={expenses}
              setEditExpenses={setEditExpenses}
              deleteExpense={deleteExpense}
              filter={filter}
              filterExpenses={filterExpenses}
            />
          </main>
          <div className="nuevo-gasto">
            <img
              src={newConsume}
              alt="New consume"
              onClick={handleNewConsume}
            />
          </div>
        </>
      )}

      {modal && (
        <Modal
          setModal={setModal}
          animateModal={animateModal}
          setAnimateModal={setAnimateModal}
          saveExpense={saveExpense}
          editExpenses={editExpenses}
          setEditExpenses={setEditExpenses}
        />
      )}
    </div>
  );
};

export default App;
