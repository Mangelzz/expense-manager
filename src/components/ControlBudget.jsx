import React, { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ControlBudget = ({ budget, expenses, setBudget, setExpenses, setIsValid }) => {
  const [pertentage, setPercentage] = useState(0);
  const [available, setAvailable] = useState(0);
  const [consume, setConsume] = useState(0);

  useEffect(() => {
    const totalConsume = expenses.reduce(
      (total, expense) => expense.quantity + total,
      0
    );
    const totalAvailable = budget - totalConsume;

    // Calculate consume percentage
    const newPercentage = (((budget - totalAvailable) / budget) * 100).toFixed(
      1
    );
    setAvailable(totalAvailable);
    setConsume(totalConsume);

    setTimeout(() => {
      setPercentage(newPercentage);
    }, 500);
  }, [expenses]);

  const formatBudget = (budget) => {
    return budget.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  const handleResetApp = () => {
    const result = confirm('The app will be reset, do you want to continue?')

    if(result){
      setExpenses([])
      setBudget(0)
      setIsValid(false)
    }
  };

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <CircularProgressbar
          styles={buildStyles({
            pathColor: pertentage > 100 ? "#DC2626" : "#3B82F6",
            trailColor: "#F5F5F5",
            textColor: pertentage > 100 ? "#DC2626" : "#3B82F6",
          })}
          value={pertentage}
          text={`${pertentage}% consumed`}
        />
      </div>
      <div className="contenido-presupuesto">
        <button className="reset-app" type="button" onClick={handleResetApp}>
          Reset App
        </button>
        <p>
          <span>Budget:</span> {formatBudget(budget)}
        </p>
        <p className={available < 0 ? "negativo" : ""}>
          <span>Available:</span> {formatBudget(available)}
        </p>
        <p>
          <span>Consumed:</span> {formatBudget(consume)}
        </p>
      </div>
    </div>
  );
};

export default ControlBudget;
