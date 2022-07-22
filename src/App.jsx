import "./App.css";
import freeCodeCampLogo from "./images/freecodecamp-logo.png";
import { Fragment } from "react";
import ListaDeTareas from "./components/ListaDeTareas";

function App() {
  return (
    <Fragment>
      <div className="aplicacion-tareas">
        <div className="freecodecamp-logo-contenedor">
          <img
            src={freeCodeCampLogo}
            alt="Logo FreeCodeCamp"
            className="freecodecamp-logo"
          />
        </div>

        <div className="tareas-lista-principal">
          <h1>Mis Tareas</h1>
          <ListaDeTareas />
        </div>
      </div>
    </Fragment>
  );
}

export default App;
