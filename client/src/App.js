import {Route, Routes} from "react-router-dom";
import PaginaPrincipal from "./componentes/PaginaPrincipal";
import Actividades from "./componentes/Actividades";
import Museos from "./componentes/Museos";
import CrearMuseo from "./componentes/CrearMuseo";
import './App.css';

const App = () => {
  return (
    <div className="Container">
      <Routes>
        <Route path ="/" element ={<PaginaPrincipal/>}/>
        <Route path="/actividades" element={<Actividades/>}/>
        <Route path="/museos" element={<Museos/>}/>
        <Route path="/museos/crear" element={<CrearMuseo/>}/>
      </Routes>
    </div>
  )
}

export default App;

//<Route path="/editar/:id" element={<Editar/>}></Route>
