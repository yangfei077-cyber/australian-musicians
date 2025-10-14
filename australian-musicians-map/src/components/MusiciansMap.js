import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import musiciansData from '../australian_musicians.json';
import { getCoordinates } from '../cityCoordinates';

// Fix for default marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const MusiciansMap = () => {
  const [selectedMusician, setSelectedMusician] = useState(null);

  // Group musicians by city
  const musiciansByCity = musiciansData.reduce((acc, musician) => {
    const city = musician.origin_city;
    if (!acc[city]) {
      acc[city] = [];
    }
    acc[city].push(musician);
    return acc;
  }, {});

  // Australia center coordinates
  const australiaCenter = [-25.2744, 133.7751];

  return (
    <div className="map-container">
      <MapContainer 
        center={australiaCenter} 
        zoom={5} 
        style={{ height: '100vh', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {Object.entries(musiciansByCity).map(([city, musicians]) => {
          const coords = getCoordinates(city);
          
          return (
            <Marker 
              key={city} 
              position={[coords.lat, coords.lng]}
              eventHandlers={{
                click: () => setSelectedMusician({ city, musicians })
              }}
            >
              <Popup>
                <div className="popup-content">
                  <h3>{city}</h3>
                  <p className="musician-count">{musicians.length} musician{musicians.length > 1 ? 's' : ''}</p>
                  <div className="musicians-list">
                    {musicians.map((musician, idx) => (
                      <div key={idx} className="musician-item">
                        <h4>{musician.name}</h4>
                        <p className="genre">{musician.genre}</p>
                        <p className="notable-works">
                          <strong>Notable works:</strong> {musician.notable_works.join(', ')}
                        </p>
                        <p className="active-years">{musician.active_years}</p>
                        {musician.awards && musician.awards.length > 0 && (
                          <p className="awards">🏆 {musician.awards.join(', ')}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>

      {/* Legend/Stats Panel */}
      <div className="stats-panel">
        <h2>Australian Musicians Map</h2>
        <div className="stats">
          <p><strong>Total Musicians:</strong> {musiciansData.length}</p>
          <p><strong>Cities:</strong> {Object.keys(musiciansByCity).length}</p>
        </div>
        <div className="genre-legend">
          <h3>Genres</h3>
          <ul>
            {[...new Set(musiciansData.map(m => m.genre))].sort().map(genre => (
              <li key={genre}>
                <span className="genre-badge">{genre}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MusiciansMap;

