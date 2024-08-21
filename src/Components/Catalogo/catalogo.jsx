import React, { useState } from 'react';
import './css/catalogo.css';
import logo from '../assets/images/eurocolorpng.png'; 

const products = [
  {
    name: 'Berelex One Hand',
    series: 'Serie 3200',
    image: '/images/berelex-one-hand.png',
    category: 'Pigmentos'
  },
  {
    name: 'Berelex Super Satín',
    series: 'No. 2273',
    image: '/images/berelex-super-satin.png',
    category: 'Pigmentos'
  },
  {
    name: 'Berelex Pintura para playa y climas de alta humedad',
    series: 'Serie 3500',
    image: '/images/berelex-humedad.png',
    category: 'Granilla'
  },
  {
    name: 'Berelinte',
    series: 'Serie 080000',
    image: '/images/berelinte.png',
    category: 'Esmaltes'
  },
  {
    name: 'Berelex',
    series: 'Serie 200',
    image: '/images/berelex.png',
    category: 'Materias Primas'
  },
  {
    name: 'Berelinte Satinado',
    series: 'Serie 8070',
    image: '/images/berelinte-satinado.png',
    category: 'Aditivos'
  },
  {
    name: 'Multitono Pro',
    series: 'Serie 4700',
    image: '/images/multitono-pro.png',
    category: 'Herramientas'
  },
  {
    name: 'Multitono Max',
    series: 'Serie 1800',
    image: '/images/multitono-max.png',
    category: 'Otros'
  },
  {
    name: 'Kalos Tone Mate',
    series: 'Serie 7700',
    image: '/images/kalos-tone-mate.png',
    category: 'Otros'
  }
];

const CatalogoPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Pigmentos'); // Inicialmente se selecciona 'Pigmentos'

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = products.filter(
    (product) => product.category === selectedCategory
  );
  
    return (
      <div className="home">
        <header className="header"> 
          <div className="navbar">
            <div className="navbar-logo">
              <img src={logo} alt="Logo Empresa" className="logo-empresa-login" />
            </div>
            <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
            <li className="navbar-item"><a href="/">INICIO</a></li>
              <li className="navbar-item"><a href="/Nosotros">¿QUIÉNES SOMOS?</a></li>
              <li className="navbar-item"><a href="/ubicacion">UBICA TU TIENDA</a></li>
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

      <div className="catalogo-contenido">
        <div className="catalogo-categorias">
          <ul>
            <li onClick={() => handleCategoryClick('Pigmentos')}>Pigmentos</li>
            <li onClick={() => handleCategoryClick('Colores para Pasta')}>Colores para Pasta</li>
            <li onClick={() => handleCategoryClick('Granilla')}>Granilla</li>
            <li onClick={() => handleCategoryClick('Esmaltes')}>Esmaltes</li>
            <li onClick={() => handleCategoryClick('Materias Primas')}>Materias Primas</li>
            <li onClick={() => handleCategoryClick('Aditivos')}>Aditivos</li>
            <li onClick={() => handleCategoryClick('Herramientas')}>Herramientas</li>
            <li onClick={() => handleCategoryClick('Otros')}>Otros</li>
          </ul>
        </div>
        <div className="catalogo-galeria">
          {filteredProducts.map((product, index) => (
            <div className="catalogo-item" key={index}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.series}</p>
            </div>
          ))}
        </div>
      </div>

      <footer className="footer">
        <p>&copy; 2024 Eurocolors. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default CatalogoPage;
