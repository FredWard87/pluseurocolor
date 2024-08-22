
import React, { useState } from 'react';
import './css/inicio.css';
import logo from '../assets/images/eurocolorpng.png'; 
import pigmento from '../assets/images/pigmentos_thumb.jpg';
import lapices from '../assets/images/lapices_thumb.jpeg';
import herramientas from '../assets/images/herramientas_thumb.jpg';

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="home">
      <header className="header">
        <div className="navbar">
          <div className="navbar-logo">
            <img src={logo} alt="Logo Empresa" className="logo-empresa-login" />
          </div>
          <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
            <li className="navbar-item"><a href="/catalogo">CATALOGÓ</a></li>
            <li className="navbar-item"><a href="/Nosotros">¿QUIÉNES SOMOS?</a></li>
            <li className="navbar-item"><a href="#ubicacion">UBICA TU TIENDA</a></li>
          </ul>
          <div className="navbar-search">
            <input type="text" placeholder="Buscar..." />
            <button type="submit">🔍</button>
          </div>
          <div className="menu-icon" onClick={toggleMenu}>
            ☰
          </div>
        </div>
      </header>

      <section className="hero-section">
        <div className="hero-content">
          <h1>Bienvenidos a Eurocolors</h1>
          <p>Calidad y confiabilidad en cada uno de nuestros productos</p>
        </div>
      </section>

      <section className="products-section">
        <h2>Nuestros Productos</h2>
        <div className="products-grid">
          <div className="product-item">
            <img src={pigmento} alt="Foto pigmentos" className="product-image" />
            <h3>Pigmentos</h3>
            <p>Dentro de nuestra marca podrás encontrar una gran variedad de pigmentos.</p>
          </div>
          <div className="product-item">
            <img src={lapices} alt="Foto lapices" className="product-image" />
            <h3>Lápices</h3>
            <p>Descubre la cantidad y sobre todo la excelente calidad de nuestros lápices.</p>
          </div>
          <div className="product-item">
            <img src={herramientas} alt="Foto herramientas" className="product-image" />
            <h3>Herramientas</h3>
            <p>Dentro de Eurocolor, contamos con una excelente calidad de herramientas.</p>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <h2>Contacto</h2>
        <p>Estamos aquí para ayudarte. Contáctanos a través de los siguientes medios:</p>
        <ul>
          <li>Teléfono: (418) 120-0922</li>
          <li>Whatsapp: (418) 115-4073</li>
          <li>Email: EUROCOLORS.CERAMICOS@GMAIL.COM</li>
        </ul>
      </section>

      <footer className="footer">
        <p>&copy; 2024 Eurocolors. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Home;
