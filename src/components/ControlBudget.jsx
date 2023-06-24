import React, { useEffect } from "react";

const ControlBudget = ({ budget, expenses }) => {

  useEffect(() => {
    
  }, [expenses])


  const fortmatBudget = (budget) => {
    return budget.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <p>Table here</p>
      </div>
      <div className="contenido-presupuesto">
        <p>
          <span>Budget:</span> {fortmatBudget(budget)}
        </p>
        <p>
          <span>Available:</span> {fortmatBudget(0)}
        </p>
        <p>
          <span>Consume:</span> {fortmatBudget(0)}
        </p>
      </div>
    </div>
  );
};

export default ControlBudget;
