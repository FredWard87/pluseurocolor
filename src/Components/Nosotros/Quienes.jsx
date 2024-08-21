import React, { useState } from 'react';
import './css/quienes.css';  // Asegúrate de que el nombre de archivo sea el correcto
import logo from '../assets/images/eurocolorpng.png'; 

const AboutUs = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="about-container">
      <header className="header">
        <div className="navbar">
          <div className="navbar-logo">
            <img src={logo} alt="Logo Empresa" className="logo-empresa-login" />
          </div>
          <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="navbar-item"><a href="/">INICIO</a></li>
            <li className="navbar-item"><a href="/catalogo">CATALOGO</a></li>
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

      <div className="about-content-container">
        <div className="text-container">
          <section className="section">
            <h1 className="section-title">Antecedentes</h1>
            <p className="section-text">
              Materiales Cerámicos EUROCOLOR comenzó en el año 2012 en Dolores Hidalgo, Guanajuato. Bajo la dirección de Esmalglass Itaca Grupo, una empresa española líder en la fabricación y comercialización de colorificios cerámicos. EUROCOLOR fue creada con el objetivo de ofrecer pigmentos, esmaltes, aditivos, herramientas y equipos, apostando por un servicio integral para la industria cerámica local, enfocándose en la satisfacción del cliente.
            </p>
          </section>
          
          <section className="section">
            <h1 className="section-title">Misión</h1>
            <p className="section-text">
              Somos una empresa comprometida y responsable, creando diferencia en el mercado para nuestros clientes.
            </p>
          </section>
          
          <section className="section">
            <h1 className="section-title">Visión</h1>
            <p className="section-text">
              En el año 2024, nos visualizamos como una empresa nacional líder en soluciones cerámicas, proporcionando alternativas innovadoras que beneficien satisfactoriamente los procesos de producción de nuestros clientes, a través de la capacitación continua de nuestros colaboradores.
            </p>
          </section>
          
          <section className="section">
            <h1 className="section-title">Valores</h1>
            <ul className="values-list">
              <li className="value-item">Respeto</li>
              <li className="value-item">Honestidad</li>
              <li className="value-item">Trabajo en equipo</li>
              <li className="value-item">Pasión</li>
              <li className="value-item">Lealtad</li>
            </ul>
          </section>
          
          <section className="section">
            <h1 className="section-title">Política de Calidad</h1>
            <p className="section-text">
              En Materiales Cerámicos EUROCOLOR nos comprometemos a satisfacer las necesidades y expectativas de nuestros clientes mediante la mejora continua de nuestros procesos, productos y servicios. Implementamos un sistema de gestión de calidad basado en normas internacionales, asegurando la calidad de nuestros pigmentos, esmaltes, aditivos, herramientas y equipos.
            </p>
          </section>
        </div>
        <div className="image-container">
        </div>
      </div>

      <footer className="footer">
        <p>&copy; 2024 Eurocolors. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default AboutUs;
