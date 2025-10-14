# Australian Musicians Dataset

This dataset contains information about notable Australian musicians across various genres and eras.

## Files

- `australian_musicians.csv` - CSV format with 30 Australian musicians
- `australian_musicians.json` - JSON format with additional descriptions and structured data

## Fields

- **name**: Artist or band name
- **birth_year**: Year of birth (for individuals) or formation (for bands)
- **genre**: Primary musical genre
- **notable_works**: Famous songs or albums
- **active_years**: Period of activity
- **origin_city**: City of origin (some artists have multiple locations listed)
- **awards**: Notable awards and achievements
- **description**: (JSON only) Brief description of the artist

## Coverage

The dataset includes:
- **50 musicians/bands** spanning from the 1940s to present day
- Multiple genres: Rock, Pop, Hip Hop, Electronic, Country, Folk, Children's Music
- Artists from major Australian cities: Sydney, Melbourne, Perth, Adelaide, Brisbane, Darwin
- Mix of internationally successful artists and Australian music icons
- Both active and historical acts

## Notable Inclusions

- **Legendary Bands**: AC/DC, INXS, Midnight Oil, Men at Work
- **Pop Icons**: Kylie Minogue, Sia, Olivia Newton-John
- **Modern Acts**: Tame Impala, Tones and I, Troye Sivan
- **Hip Hop**: Hilltop Hoods, Iggy Azalea
- **Electronic**: Flume, The Avalanches
- **Indie**: Courtney Barnett, Vance Joy, Angus & Julia Stone
- **Experimental**: King Gizzard & the Lizard Wizard

## Usage

### Python
```python
import json
import csv

# Load JSON
with open('australian_musicians.json', 'r') as f:
    musicians = json.load(f)

# Load CSV
with open('australian_musicians.csv', 'r') as f:
    reader = csv.DictReader(f)
    musicians = list(reader)
```

### JavaScript/Node.js
```javascript
const musicians = require('./australian_musicians.json');
// or
const fs = require('fs');
const musicians = JSON.parse(fs.readFileSync('australian_musicians.json', 'utf8'));
```

## Data Source

This dataset is compiled from public information about Australian musicians and their achievements. The information reflects their status as of 2025.

## Public Datasets & Resources for Australian Musicians

If you need larger, more comprehensive datasets, here are some excellent open public resources:

### Australian-Specific Datasets

1. **Australian Music Database** ([australianmusicdatabase.com](https://www.australianmusicdatabase.com))
   - Comprehensive information on Australian bands, musicians, recordings, and venues
   - Focuses on rock and pop but open to all genres
   - Includes "family tree" relationships between artists

2. **Australian Cultural Data Engine (ACD-Engine)** ([acd-engine.org](https://www.acd-engine.org))
   - Funded by the Australian Research Council
   - Aggregates digital data about artists and cultural activities in Australian history
   - Provides datasets and analytics for research and reuse

3. **Triple J Unearthed**
   - Over 170,000 tracks from 85,000+ independent Australian musicians
   - Digital radio station and music discovery platform

4. **AusStage** ([ausstage.edu.au](https://www.ausstage.edu.au))
   - Database of live performances in Australia (1789-present)
   - Records productions, venues, companies, and individuals
   - Managed by consortium of Australian institutions

5. **National Library of Australia - Sheet Music Collection** ([data.gov.au](https://data.gov.au))
   - 11,000+ items of printed music by Australians
   - Historical significance including original scores

6. **Jaxsta** ([jaxsta.com](https://jaxsta.com))
   - Official music credits database (Australian-based)
   - Content-owner supplied data (not crowd-sourced)

### International Music Databases (with Australian artists)

1. **MusicBrainz** ([musicbrainz.org](https://musicbrainz.org))
   - Open music encyclopedia with API access
   - Query by country/region to filter Australian artists
   - Free, community-maintained database

2. **Discogs** ([discogs.com](https://www.discogs.com))
   - Comprehensive music database with API
   - Monthly data dumps available
   - Can filter by country and label

3. **Spotify Web API** ([developer.spotify.com](https://developer.spotify.com))
   - Access to millions of tracks including Australian artists
   - Requires API key but free tier available
   - Rich metadata about artists and tracks

4. **Last.fm API** ([last.fm/api](https://www.last.fm/api))
   - Music metadata and listening statistics
   - Can filter by country tags

## License

This dataset is provided for educational and research purposes.

