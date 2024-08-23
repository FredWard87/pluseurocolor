import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/inicio.css';
import logo from '../assets/images/eurocolorpng.png'; 
import pigmento from '../assets/images/pigmentos_thumb.jpg';
import lapices from '../assets/images/lapices_thumb.jpeg';
import herramientas from '../assets/images/herramientas_thumb.jpg';

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState(''); 
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    const lowerCaseSearchTerm = searchTerm.trim().toLowerCase();

    const categorySynonyms = {
      'Pigmentos': ['pigmento', 'colorante'],
      'Colores para Pasta': ['colores', 'pasta', 'colorante pasta'],
      'Granilla': ['granillas', 'grano', 'partículas'],
      'Esmaltes': ['esmalte', 'barniz'],
      'Materias Primas': ['material', 'materia prima', 'materiales'],
      'Aditivos': ['aditivo', 'aditivos'],
      'Herramientas': ['herramienta', 'utensilios', 'instrumento', 'modelado','rib','aguja'],
      'Otros': ['otro', 'diverso', 'varios']
    };

    let matchedCategory = Object.keys(categorySynonyms).find(category => {
      const lowerCaseCategory = category.toLowerCase();
      const synonyms = categorySynonyms[category].map(synonym => synonym.toLowerCase());

      return lowerCaseCategory.includes(lowerCaseSearchTerm) || synonyms.some(synonym => synonym.includes(lowerCaseSearchTerm));
    });

    if (matchedCategory) {
      navigate(`/catalogo?category=${matchedCategory}&search=${lowerCaseSearchTerm}`);
    } else {
      navigate(`/catalogo?search=${lowerCaseSearchTerm}`);
    }
  };

  return (
    <div className="home">
      <header className="header">
        <div className="navbar">
          <div className="navbar-logo">
            <img src={logo} alt="Logo Empresa" className="logo-empresa-login" />
          </div>
          <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
            <li className="navbar-item"><a href="/catalogo">CATÁLOGO</a></li>
            <li className="navbar-item"><a href="/Nosotros">¿QUIÉNES SOMOS?</a></li>
            <li className="navbar-item"><a href="/ubicacion">UBICA TU TIENDA</a></li>
            <li className="navbar-item"><a href="/catalogó-Eurocolor.pdf" className="download-button" download>DESCARGA NUESTRO CATÁLOGO</a>
            </li>
          </ul>
          <div className="navbar-search">
            <form onSubmit={handleSearchSubmit}>
              <input 
                type="text" 
                placeholder="Buscar..." 
                value={searchTerm}
                onChange={handleSearchChange} 
              />
              <button type="submit">🔍</button>
            </form>
          </div>
          <div className="menu-icon" onClick={toggleMenu}>
            ☰
          </div>
        </div>
      </header>

      <section className="hero-section">
        <div className="hero-content">
          <h1>Bienvenidos a Eurocolor</h1>
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
