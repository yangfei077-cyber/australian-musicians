# Australian Musicians Map 🎵🗺️

An interactive map visualization of Australian musicians, showing their origins across Australia with detailed information about their work, genres, and achievements.

## Features

- 🗺️ **Interactive Map** - Click on markers to see musicians from each city
- 📍 **50 Musicians** - Spanning multiple cities across Australia
- 🎸 **Detailed Info** - View notable works, genres, active years, and awards
- 📊 **Statistics Panel** - See total counts and genre breakdown
- 🎨 **Beautiful UI** - Modern, responsive design with smooth interactions

## Data Included

The visualization includes 50 verified Australian musicians with:
- Name and origin city
- Musical genre
- Notable works (based on Spotify streaming data)
- Active years
- Awards and achievements
- Artist descriptions

## Getting Started

### Prerequisites

- Node.js 14+ and npm

### Installation

```bash
# Navigate to the project
cd australian-musicians-map

# Install dependencies
npm install

# Start the development server
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

## Usage

1. **Explore the Map**: Pan and zoom to explore different regions of Australia
2. **Click Markers**: Click on city markers to see all musicians from that location
3. **View Details**: Each popup shows:
   - Musician names
   - Genres
   - Top 3 notable works
   - Active years
   - Awards won
4. **Check Stats**: View the stats panel on the right for overview information

## Technologies Used

- **React** - Frontend framework
- **Leaflet** - Interactive maps
- **React-Leaflet** - React components for Leaflet
- **OpenStreetMap** - Map tiles

## Data Source

The musician data is curated from verified sources including:
- Spotify streaming statistics
- ARIA Awards records
- Official artist profiles
- Music industry databases

## Cities Covered

- Sydney
- Melbourne
- Brisbane
- Perth
- Adelaide
- Darwin
- Canberra
- Newcastle
- Gold Coast
- And many more!

## Notable Artists Featured

- AC/DC
- Kylie Minogue
- Tame Impala
- The Kid LAROI
- Nick Cave
- Sia
- 5 Seconds of Summer
- And 43 more!

## Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## License

Data compiled for educational and research purposes. Please credit original artists and sources when using this data.
