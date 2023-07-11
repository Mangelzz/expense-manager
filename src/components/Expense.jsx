import { formatDate } from "../helpers/index";

import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions
} from 'react-swipeable-list'
import "react-swipeable-list/dist/styles.css"
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

const Expense = ({ expense, setEditExpenses, deleteExpense }) => {
  const { category, name, quantity, id, date } = expense;

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => setEditExpenses(expense)}>
        Edit
      </SwipeAction>
    </LeadingActions>
  )

  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction onClick={() => deleteExpense(id)}
        destructive={true}
      >
        Delete
      </SwipeAction>
    </TrailingActions>
  )

  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
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
      </SwipeableListItem>
    </SwipeableList>
  );
};
export default Expense;
