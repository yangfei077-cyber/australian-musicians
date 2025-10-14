# API Examples for Accessing Australian Musicians Data

This guide provides code examples for accessing Australian musician data from various public APIs.

## MusicBrainz API

MusicBrainz is an open music encyclopedia with comprehensive data about artists, recordings, and releases.

### Python Example - Search for Australian Artists

```python
import requests

def search_australian_artists(query="", limit=10):
    """Search for Australian artists on MusicBrainz"""
    base_url = "https://musicbrainz.org/ws/2/artist"
    
    params = {
        'query': f'area:Australia AND {query}' if query else 'area:Australia',
        'limit': limit,
        'fmt': 'json'
    }
    
    headers = {
        'User-Agent': 'AustralianMusicResearch/1.0 (your-email@example.com)'
    }
    
    response = requests.get(base_url, params=params, headers=headers)
    
    if response.status_code == 200:
        data = response.json()
        artists = data.get('artists', [])
        
        for artist in artists:
            print(f"Name: {artist.get('name')}")
            print(f"Type: {artist.get('type')}")
            print(f"Genre: {artist.get('tags', [{}])[0].get('name') if artist.get('tags') else 'N/A'}")
            print(f"ID: {artist.get('id')}\n")
        
        return artists
    else:
        print(f"Error: {response.status_code}")
        return []

# Example usage
artists = search_australian_artists("rock", limit=5)
```

### Get Artist Details

```python
def get_artist_details(artist_id):
    """Get detailed information about a specific artist"""
    url = f"https://musicbrainz.org/ws/2/artist/{artist_id}"
    
    params = {
        'inc': 'releases+recordings+tags+ratings',
        'fmt': 'json'
    }
    
    headers = {
        'User-Agent': 'AustralianMusicResearch/1.0 (your-email@example.com)'
    }
    
    response = requests.get(url, params=params, headers=headers)
    
    if response.status_code == 200:
        return response.json()
    return None
```

## Spotify Web API

Spotify provides rich metadata about artists and tracks. Requires authentication.

### Python Example - Search Australian Artists

```python
import requests
import base64

def get_spotify_token(client_id, client_secret):
    """Get Spotify API access token"""
    auth_url = "https://accounts.spotify.com/api/token"
    
    auth_header = base64.b64encode(f"{client_id}:{client_secret}".encode()).decode()
    headers = {
        'Authorization': f'Basic {auth_header}',
        'Content-Type': 'application/x-www-form-urlencoded'
    }
    
    data = {'grant_type': 'client_credentials'}
    
    response = requests.post(auth_url, headers=headers, data=data)
    return response.json().get('access_token')

def search_spotify_artists(token, query, market='AU'):
    """Search for artists on Spotify"""
    url = "https://api.spotify.com/v1/search"
    
    headers = {
        'Authorization': f'Bearer {token}'
    }
    
    params = {
        'q': query,
        'type': 'artist',
        'market': market,
        'limit': 10
    }
    
    response = requests.get(url, headers=headers, params=params)
    
    if response.status_code == 200:
        data = response.json()
        artists = data.get('artists', {}).get('items', [])
        
        for artist in artists:
            print(f"Name: {artist.get('name')}")
            print(f"Popularity: {artist.get('popularity')}")
            print(f"Genres: {', '.join(artist.get('genres', []))}")
            print(f"Followers: {artist.get('followers', {}).get('total')}\n")
        
        return artists
    return []

# Example usage (requires your Spotify API credentials)
# token = get_spotify_token('YOUR_CLIENT_ID', 'YOUR_CLIENT_SECRET')
# artists = search_spotify_artists(token, 'Australian rock')
```

## Discogs API

Discogs provides detailed discography information. Free API with rate limits.

### Python Example

```python
import requests

def search_discogs_artists(query, country='Australia'):
    """Search for artists on Discogs"""
    url = "https://api.discogs.com/database/search"
    
    headers = {
        'User-Agent': 'AustralianMusicResearch/1.0'
    }
    
    params = {
        'q': query,
        'type': 'artist',
        'country': country,
        'per_page': 10
    }
    
    response = requests.get(url, headers=headers, params=params)
    
    if response.status_code == 200:
        data = response.json()
        results = data.get('results', [])
        
        for artist in results:
            print(f"Name: {artist.get('title')}")
            print(f"Type: {artist.get('type')}")
            print(f"ID: {artist.get('id')}\n")
        
        return results
    return []

# Example usage
artists = search_discogs_artists('rock')
```

## Last.fm API

Last.fm provides listening statistics and metadata. Requires free API key.

### Python Example

```python
import requests

def search_lastfm_australian_artists(api_key, artist_name):
    """Search for artist info on Last.fm"""
    url = "http://ws.audioscrobbler.com/2.0/"
    
    params = {
        'method': 'artist.getinfo',
        'artist': artist_name,
        'api_key': api_key,
        'format': 'json'
    }
    
    response = requests.get(url, params=params)
    
    if response.status_code == 200:
        data = response.json()
        artist = data.get('artist', {})
        
        print(f"Name: {artist.get('name')}")
        print(f"Listeners: {artist.get('stats', {}).get('listeners')}")
        print(f"Play count: {artist.get('stats', {}).get('playcount')}")
        print(f"Tags: {', '.join([tag['name'] for tag in artist.get('tags', {}).get('tag', [])])}")
        print(f"Bio: {artist.get('bio', {}).get('summary', '')[:200]}...\n")
        
        return artist
    return None

# Example usage (requires Last.fm API key)
# artist = search_lastfm_australian_artists('YOUR_API_KEY', 'AC/DC')
```

## JavaScript/Node.js Examples

### MusicBrainz with Node.js

```javascript
const axios = require('axios');

async function searchAustralianArtists(query = '', limit = 10) {
  const baseUrl = 'https://musicbrainz.org/ws/2/artist';
  
  const params = {
    query: query ? `area:Australia AND ${query}` : 'area:Australia',
    limit: limit,
    fmt: 'json'
  };
  
  const headers = {
    'User-Agent': 'AustralianMusicResearch/1.0 (your-email@example.com)'
  };
  
  try {
    const response = await axios.get(baseUrl, { params, headers });
    const artists = response.data.artists || [];
    
    artists.forEach(artist => {
      console.log(`Name: ${artist.name}`);
      console.log(`Type: ${artist.type}`);
      console.log(`ID: ${artist.id}\n`);
    });
    
    return artists;
  } catch (error) {
    console.error('Error:', error.message);
    return [];
  }
}

// Example usage
searchAustralianArtists('rock', 5);
```

## Rate Limits & Best Practices

### MusicBrainz
- Rate limit: 1 request per second
- Must include User-Agent header with contact info
- Free and open, no API key required

### Spotify
- Rate limit: Varies by endpoint
- Requires OAuth authentication
- Free tier available

### Discogs
- Authenticated: 60 requests/minute
- Unauthenticated: 25 requests/minute
- Free API key available

### Last.fm
- Rate limit: 5 requests/second
- Free API key required
- Non-commercial use

## Tips

1. **Always respect rate limits** - Add delays between requests
2. **Cache results** - Store frequently accessed data locally
3. **Use appropriate User-Agent** - Identify your application
4. **Handle errors gracefully** - APIs may be temporarily unavailable
5. **Check API documentation** - APIs update their endpoints and parameters

## Data Combination Strategy

For comprehensive Australian musician data:

1. **Use MusicBrainz** for basic artist information and relationships
2. **Use Spotify** for popularity metrics and listening data
3. **Use Discogs** for detailed discography and release information
4. **Use Last.fm** for listening statistics and user-generated tags
5. **Cross-reference** using artist names or MBID (MusicBrainz ID)

## Resources

- [MusicBrainz API Docs](https://musicbrainz.org/doc/MusicBrainz_API)
- [Spotify Web API Docs](https://developer.spotify.com/documentation/web-api)
- [Discogs API Docs](https://www.discogs.com/developers)
- [Last.fm API Docs](https://www.last.fm/api)

