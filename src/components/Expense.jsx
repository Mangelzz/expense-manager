import { formatDate } from "../helpers/index";

import  IconoAhorro from "../img/icono_ahorro.svg";
import  IconoComida from "../img/icono_comida.svg";
import  IconoCasa from "../img/icono_casa.svg";
import  IconoSalud from "../img/icono_salud.svg";
import  IconoGastos from "../img/icono_gastos.svg";
import  IconoSuscripciones from "../img/icono_suscripciones.svg";

const iconDiccionary = {
  saving: IconoAhorro,
  food: IconoComida,
  home: IconoCasa,
  health: IconoSalud,
  miscellaneous: IconoGastos,
  suscriptions: IconoSuscripciones,
};

const Expense = ({ expense }) => {
  const { category, name, quantity, id, date } = expense;
  return (
    <div className="gasto sombra">
      <div className="contenido-gasto">
        <img
          src={iconDiccionary[category]}
          alt="Icono categoria"
        />
        <div className="descripcion-gasto">
          <p className="categoria">{category}</p>
          <p className="nombre-gasto">{name}</p>
          <p className="fecha-gasto">
            Added: <span>{formatDate(date)}</span>
          </p>
        </div>
      </div>
      <p className="cantidad-gasto">${quantity}</p>
    </div>
  );
};
export default Expense;
