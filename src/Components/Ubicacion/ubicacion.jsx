import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const MapComponent = () => {
  const locations = [
    { lat: 19.432608, lng: -99.133209, name: 'Eurocolor 1' },
    { lat: 19.451054, lng: -99.125519, name: 'Eurocolor 2' },
  ];

  const defaultPosition = [19.432608, -99.133209]; // Posición inicial en el mapa (Ciudad de México)

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: '30%', padding: '20px' }}>
        <h3>Locations</h3>
        <ul>
          {locations.map((location, index) => (
            <li key={index}>{location.name}</li>
          ))}
        </ul>
      </div>

      <div style={{ width: '70%' }}>
        <MapContainer center={defaultPosition} zoom={13} style={{ height: "100vh", width: "100%" }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {locations.map((location, index) => (
            <Marker
              key={index}
              position={[location.lat, location.lng]}
              icon={L.icon({
                iconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-green.png',
                iconSize: [38, 95],
                iconAnchor: [22, 94],
                popupAnchor: [-3, -76],
                shadowUrl: 'https://leafletjs.com/examples/custom-icons/leaf-shadow.png',
                shadowSize: [50, 64],
                shadowAnchor: [4, 62],
              })}
            >
              <Popup>{location.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default MapComponent;
