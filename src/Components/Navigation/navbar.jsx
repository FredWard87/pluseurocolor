import React from 'react';
import './css/navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="berel-logo.png" alt="Berel Logo" />
      </div>
      <ul className="navbar-menu">
        <li className="navbar-item">COLORES</li>
        <li className="navbar-item">IDEAS DE DECORACIÓN</li>
        <li className="navbar-item">PRODUCTOS</li>
        <li className="navbar-item">UBICA TU TIENDA</li>
        <li className="navbar-item">TIPS PARA PINTAR</li>
      </ul>
      <div className="navbar-search">
        <input type="text" placeholder="pigmentos" />
        <button type="button">
          <span role="img" aria-label="search">🔍</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
