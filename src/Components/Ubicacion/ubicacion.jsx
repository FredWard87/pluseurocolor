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
      lat: 21.1480786,
      lng: -100.970547,
      name: 'Sucursal Lindavista',
      address: 'Av. División del Norte #139',
      colonia: 'Lindavista',
      phone: '418 120 09 22',
      mapsLink: 'https://www.google.com/maps/place/Eurocolor/@21.1480786,-100.970547,13.67z/data=!4m10!1m2!2m1!1seurocolor!3m6!1s0x842b3fdc503b6607:0x3724936240801657!8m2!3d21.1505664!4d-100.9579556!15sCglldXJvY29sb3IiA4gBAVoLIglldXJvY29sb3KSAQVzdG9yZeABAA!16s%2Fg%2F11q1mc2wj6?entry=ttu&g_ep=EgoyMDI0MDgyMS4wIKXMDSoASAFQAw%3D%3D',
    },
    {
      lat: 21.1573916,
      lng: -100.9667816,
      name: 'Sucursal Centro',
      address: 'Av. Renovación #22',
      colonia: 'Centro',
      phone: '418 690 32 97',
      mapsLink: 'https://www.google.com.mx/maps/place/Eurocolor+Insumos+cer%C3%A1micos/@21.1573916,-100.9667816,14z/data=!4m10!1m2!2m1!1seurocolor!3m6!1s0x842b3fd35eb64b25:0xacc42015266b27c4!8m2!3d21.1573916!4d-100.9286728!15sCglldXJvY29sb3IiA4gBAZIBE2NlcmFtaWNzX3dob2xlc2FsZXLgAQA!16s%2Fg%2F11rk54rpy_?entry=ttu&g_ep=EgoyMDI0MDgyMS4wIKXMDSoASAFQAw%3D%3D',
    },
      {
    lat: 21.1479748, 
    lng: -100.9188916,
    name: 'Sucursal San Pablo',
    address: 'Camino a San Pablo #3',
    colonia: '12 de Octubre',
    phone: '418 19 82 83',
    mapsLink: 'https://www.google.com.mx/maps/place/Cam.+a+San+Pablo,+37805+Dolores+Hidalgo+Cuna+de+la+Independencia+Nacional,+Gto./@21.1479748,-100.9188916,18.01z/data=!4m6!3m5!1s0x842b3f139b78805b:0x50da6d8d9e0fc658!8m2!3d21.148255!4d-100.9188048!16s%2Fg%2F1v6p4m78?entry=ttu&g_ep=EgoyMDI0MDgyMS4wIKXMDSoASAFQAw%3D%3D',
  },
  ];

  const defaultPosition = [21.154526, -100.9526012];

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
