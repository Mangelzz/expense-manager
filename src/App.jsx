import { useState } from "react";
import Header from "./components/Header";
import newConsume from "./img/nuevo-gasto.svg";
import { generateId } from "./helpers/index";
import Modal from "./components/Modal";
import ListExpense from "./components/ListExpense";

const App = () => {
  const [budget, setBudget] = useState(0);
  const [isValid, setIsValid] = useState(false);

  const [modal, setModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);

  const [expenses, setExpenses] = useState([]);

  const handleNewConsume = () => {
    setModal(true);

    setTimeout(() => {
      setAnimateModal(true);
    }, 500);
  };

  const saveExpense = (expense) => {
    expense.id = generateId();
    expense.date = Date.now();
    setExpenses([...expenses, expense]);

    setAnimateModal(false);
    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  return (
    <div className={modal ? 'fijar' : ''}>
      <Header
        expenses={expenses}
        budget={budget}
        setBudget={setBudget}
        isValid={isValid}
        setIsValid={setIsValid}
      />

      {isValid && (
        <>
          <main>
            <ListExpense
              expenses={expenses}
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
        />
      )}
    </div>
  );
};

export default App;
