// Australian city coordinates for map markers
export const cityCoordinates = {
  'Sydney': { lat: -33.8688, lng: 151.2093 },
  'Melbourne': { lat: -37.8136, lng: 144.9631 },
  'Brisbane': { lat: -27.4698, lng: 153.0251 },
  'Perth': { lat: -31.9505, lng: 115.8605 },
  'Adelaide': { lat: -34.9285, lng: 138.6007 },
  'Hobart': { lat: -42.8821, lng: 147.3272 },
  'Darwin': { lat: -12.4634, lng: 130.8456 },
  'Canberra': { lat: -35.2809, lng: 149.1300 },
  'Newcastle': { lat: -32.9283, lng: 151.7817 },
  'Gold Coast': { lat: -28.0167, lng: 153.4000 },
  'Wollongong': { lat: -34.4278, lng: 150.8931 },
  'Geelong': { lat: -38.1499, lng: 144.3617 },
  'Cairns': { lat: -16.9186, lng: 145.7781 },
  'Byron Bay': { lat: -28.6474, lng: 153.6020 },
  'Queensland': { lat: -20.9176, lng: 142.7028 },
  'Cronulla': { lat: -34.0558, lng: 151.1538 },
  'Arnhem Land': { lat: -12.4167, lng: 135.0000 },
  'Mount Gambier': { lat: -37.8286, lng: 140.7826 },
  'Fingal Head': { lat: -28.1998, lng: 153.5622 },
  'Shepparton': { lat: -36.3806, lng: 145.3989 },
  'Groote Eylandt': { lat: -13.9758, lng: 136.4619 },
  'Mooroopna': { lat: -36.3833, lng: 145.3500 },
  'Yirrkala': { lat: -12.2500, lng: 136.8833 },
  'Galiwin\'ku': { lat: -12.0167, lng: 135.5667 },
  'Lismore': { lat: -28.8142, lng: 153.2789 },
  'Violet Town': { lat: -36.6167, lng: 145.7000 },
  'Finley': { lat: -35.6500, lng: 145.5667 },
  'Condobolin': { lat: -33.0833, lng: 147.1500 },
  // International origin cities (for artists born overseas)
  'Auckland (NZ)/Sydney': { lat: -33.8688, lng: 151.2093 },
  'Auckland (NZ)/Australia': { lat: -33.8688, lng: 151.2093 },
  'Johannesburg (SA)/Perth': { lat: -31.9505, lng: 115.8605 },
  'Seoul (Korea)/Brisbane': { lat: -27.4698, lng: 153.0251 },
  'London (UK)/Sydney': { lat: -33.8688, lng: 151.2093 },
  'Bruges (Belgium)/Melbourne': { lat: -37.8136, lng: 144.9631 },
  'Cambridge (UK)/Melbourne': { lat: -37.8136, lng: 144.9631 },
  'Whangarei (NZ)/Queensland': { lat: -20.9176, lng: 142.7028 },
  'Auckland (NZ)/Gold Coast': { lat: -28.0167, lng: 153.4000 }
};

// Get coordinates for a city, with fallback to Sydney
export const getCoordinates = (city) => {
  return cityCoordinates[city] || { lat: -33.8688, lng: 151.2093 };
};

