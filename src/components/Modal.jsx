import { useState } from "react";
import close from "../img/cerrar.svg";
import Error from "./Error";

const Modal = ({ setModal, animateModal, setAnimateModal, saveExpense }) => {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [category, setCategory] = useState("");

  const closeModal = () => {
    setTimeout(() => {
      setModal(false);
    }, 500);

    setAnimateModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([name, quantity, category].includes("")) {
      setMessage("All fields are required");

      setTimeout(() => {
        setMessage("");
      }, 2000);
      return;
    }
    saveExpense({ name, quantity, category });
  };

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={close} alt="Close" onClick={closeModal} />
      </div>
      <form
        onSubmit={handleSubmit}
        className={`formulario ${animateModal ? "animar" : "cerrar"}`}
      >
        <legend>New budget</legend>
        {message && <Error type="error">{message}</Error>}
        <div className="campo">
          <label htmlFor="concept">Concept</label>
          <input
            id="concept"
            type="text"
            placeholder="add budget's concept"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="campo">
          <label htmlFor="quantity">Quantity</label>
          <input
            id="quantity"
            type="number"
            placeholder="add budget's quantity"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
        </div>

        <div className="campo">
          <label htmlFor="category">Category</label>
          <select
            name="category"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">-- Select a category --</option>
            <option value="saving">Saving</option>
            <option value="food">Food</option>
            <option value="home">Home</option>
            <option value="miscellaneous">Miscellaneous</option>
            <option value="health">Health</option>
            <option value="suscriptions">Suscriptions</option>
          </select>
        </div>

        <input type="submit" value="new budget" />
      </form>
    </div>
  );
};

export default Modal;
