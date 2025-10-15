import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import musiciansData from '../australian_musicians.json';
import { getCoordinates } from '../cityCoordinates';
import { getSpotifyArtistUrl } from '../spotifyArtistIds';

// Fix for default marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const MusiciansMap = () => {
  const [selectedMusician, setSelectedMusician] = useState(null);
  const [selectedGenres, setSelectedGenres] = useState(new Set());
  const [isMinimized, setIsMinimized] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Get all unique genres
  const allGenres = [...new Set(musiciansData.map(m => m.genre))].sort();

  // Filter musicians by selected genres and search query
  const filteredMusicians = musiciansData.filter(musician => {
    const matchesGenre = selectedGenres.size === 0 || selectedGenres.has(musician.genre);
    const matchesSearch = searchQuery === '' || 
      musician.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesGenre && matchesSearch;
  });

  // Group filtered musicians by city
  const musiciansByCity = filteredMusicians.reduce((acc, musician) => {
    const city = musician.origin_city;
    if (!acc[city]) {
      acc[city] = [];
    }
    acc[city].push(musician);
    return acc;
  }, {});

  // Handle genre selection
  const toggleGenre = (genre) => {
    const newSelectedGenres = new Set(selectedGenres);
    if (newSelectedGenres.has(genre)) {
      newSelectedGenres.delete(genre);
    } else {
      newSelectedGenres.add(genre);
    }
    setSelectedGenres(newSelectedGenres);
  };

  // Clear all filters
  const clearFilters = () => {
    setSelectedGenres(new Set());
    setSearchQuery('');
  };


  // Australia center coordinates
  const australiaCenter = [-25.2744, 133.7751];
  
  // Custom marker icon
  const customIcon = new L.DivIcon({
    html: `<div style="
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      width: 20px;
      height: 20px;
      border-radius: 50%;
      border: 3px solid white;
      box-shadow: 0 4px 8px rgba(102, 126, 234, 0.4);
      position: relative;
    "></div>`,
    className: 'custom-marker',
    iconSize: [20, 20],
    iconAnchor: [10, 10]
  });

  return (
    <div className="map-container">
      <MapContainer 
        center={australiaCenter} 
        zoom={5} 
        style={{ height: '100vh', width: '100%' }}
        minZoom={4}
        maxZoom={10}
        zoomControl={true}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://stamen.com/">Stamen Design</a>'
          url="https://tiles.stadiamaps.com/tiles/stamen_watercolor/{z}/{x}/{y}.jpg?api_key=fdb8242e-08f1-485d-bbd5-022f61e55eff"
        />
        
        {Object.entries(musiciansByCity).map(([city, musicians]) => {
          const coords = getCoordinates(city);
          
          return (
            <Marker 
              key={city} 
              position={[coords.lat, coords.lng]}
              icon={customIcon}
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
                        
                        {/* Spotify Artist Profile link */}
                        {musician.notable_works && musician.notable_works.length > 0 && (
                          <div className="stream-links">
                            <div 
                              className="stream-link spotify"
                              style={{ cursor: 'pointer' }}
                              onMouseDown={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                const url = getSpotifyArtistUrl(musician.name);
                                console.log('Opening direct Spotify artist profile:', url);
                                window.open(url, '_blank');
                              }}
                            >
                              🎵 Artist Profile
                            </div>
                          </div>
                        )}
                        
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


              {/* Filter Panel */}
      <div className={`stats-panel ${isMinimized ? 'minimized' : ''}`}>
        <div className="panel-header">
          <h2>Australian Musicians Map</h2>
          <div className="window-controls">
            <button 
              className="minimize-btn"
              onClick={() => setIsMinimized(!isMinimized)}
              title={isMinimized ? "Maximize" : "Minimize"}
            >
              {isMinimized ? '□' : '−'}
            </button>
          </div>
        </div>
        {!isMinimized && (
          <>
            {/* Search Bar */}
            <div className="search-section">
              <input
                type="text"
                placeholder="Search artists..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
            </div>

            <div className="stats">
              <p><strong>Showing:</strong> {filteredMusicians.length} of {musiciansData.length} musicians</p>
              <p><strong>Cities:</strong> {Object.keys(musiciansByCity).length}</p>
              {(selectedGenres.size > 0 || searchQuery !== '') && (
                <button className="clear-filters-btn" onClick={clearFilters}>
                  Clear Filters ({selectedGenres.size + (searchQuery !== '' ? 1 : 0)})
                </button>
              )}
            </div>
            
            <div className="genre-filter">
              <h3>Filter by Genre</h3>
              <div className="genre-checkboxes">
                {allGenres.map(genre => (
                  <label key={genre} className="genre-checkbox-label">
                    <input
                      type="checkbox"
                      checked={selectedGenres.has(genre)}
                      onChange={() => toggleGenre(genre)}
                      className="genre-checkbox"
                    />
                    <span className={`genre-badge ${selectedGenres.has(genre) ? 'selected' : ''}`}>
                      {genre}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </>
        )}

      </div>
    </div>
  );
};

export default MusiciansMap;

