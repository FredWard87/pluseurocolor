// App.js
import React, { createContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Inicio from './Components/Home/inicio';
import Ubicacion from './Components/Ubicacion/ubicacion'
import Catalogo from './Components/Catalogo/catalogo'
import Nosotros from './Components/Nosotros/Quienes'

export const UserContext = createContext(null);

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Inicio />} />        
          <Route path="/ubicacion" element={<Ubicacion />} />  
          <Route path="/Nosotros" element={<Nosotros />} />  
          <Route path="/catalogo" element={<Catalogo />} />                     
        </Routes>
      </Router>
    </div>
  );
}

export default App;
