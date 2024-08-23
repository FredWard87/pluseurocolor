import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import './css/ubi.css';
import logo from '../assets/images/eurocolorpng.png';

const MapComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const locations = [
    {
      lat: 19.4969,
      lng: -99.1269,
      name: 'Sucursal Lindavista',
      address: 'Av. División del Norte #139',
      colonia: 'Lindavista',
      phone: '418 120 09 22',
      mapsLink: 'https://www.google.com/maps?q=Av.+División+del+Norte+139+Lindavista',
    },
    {
      lat: 19.4967,
      lng: -99.1325,
      name: 'Sucursal Centro',
      address: 'Av. Renovación #22',
      colonia: 'Centro',
      phone: '418 690 32 97',
      mapsLink: 'https://www.google.com/maps?q=Av.+Renovación+22+Centro',
    },
  ];

  const defaultPosition = [19.4969, -99.1269];

  // Definir el icono fuera del mapa para reutilizarlo
  const markerIcon = L.icon({
    iconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-green.png',
    iconSize: [38, 95],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
    shadowUrl: 'https://leafletjs.com/examples/custom-icons/leaf-shadow.png',
    shadowSize: [50, 64],
    shadowAnchor: [4, 62],
  });

  return (
    <div className="map-container">
      <header className="header">
        <div className="navbar">
          <div className="navbar-logo">
            <img src={logo} alt="Logo Empresa" className="logo-empresa-login" />
          </div>
          <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
            <li className="navbar-item"><a href="/">INICIO</a></li>
            <li className="navbar-item"><a href="/catalogo">CATÁLOGO</a></li>
            <li className="navbar-item"><a href="/Nosotros">¿QUIÉNES SOMOS?</a></li>
          </ul>
          <div className="menu-icon" onClick={toggleMenu}>
            ☰
          </div>
        </div>
      </header>

      <div className="container">
        <div className="ubicacion-lista">
          <h3 className="ubicacion-h3">Sucursales</h3>
          <ul className="ubicacion-ul">
            {locations.map((location, index) => (
              <li key={index} className="ubicacion-li">
                <h4 className="ubicacion-h4">{location.name}</h4>
                <p><strong>Dirección:</strong> {location.address}</p>
                <p><strong>Colonia:</strong> {location.colonia}</p>
                <p><strong>Teléfono:</strong> {location.phone}</p>
                <a
                  href={location.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ubicacion-a"
                >
                  Ver en Google Maps
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mapa">
          <MapContainer center={defaultPosition} zoom={13}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {locations.map((location, index) => (
              <Marker
                key={index}
                position={[location.lat, location.lng]}
                icon={markerIcon}
              >
                <Popup>
                  <strong>{location.name}</strong><br />
                  {location.address}<br />
                  {location.colonia}<br />
                  Teléfono: {location.phone}<br />
                  <a href={location.mapsLink} target="_blank" rel="noopener noreferrer">
                    Ver en Google Maps
                  </a>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default MapComponent;
