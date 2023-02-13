
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Profesores from './pages/Profesores';
import ProfesoresAgregar from './components/ProfesoresAgregar';
import BarraSuperior from './components/BarraSuperior';
import ProfesoresModificar from './components/ProfesoresModificar';


function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element = {<BarraSuperior/>}>
      <Route index element={<Home/> }/>
      <Route path='profesores'>
        <Route index element ={<Profesores/>} />     
        <Route path ='agregar' element ={<ProfesoresAgregar/>} />
        <Route path='modificar/:c'element={<ProfesoresModificar/>} />
        </Route>


        </Route>
        
     </Routes>
    </div>
  );
}

export default App;
