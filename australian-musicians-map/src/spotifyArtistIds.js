// Spotify Artist IDs for direct profile access
// Format: https://open.spotify.com/artist/SPOTIFY_ID

export const spotifyArtistIds = {
  "Keith Urban": "0u2FHSq3ln94y5Q57xazwf",
  "AC/DC": "711MCceyCBcFnzjGY4Q7Un",
  "Kylie Minogue": "4RVnAU35WRWra6OZ3CubMA",
  "Tame Impala": "5INjqkS1o8h1imAzPqGZBb",
  "Nick Cave": "1q5DvZ52erOjhDeUyVYLHP",
  "Sia": "5WUlDfRSoLAfcVSX1WnrxN",
  "The Kid LAROI": "2tIP7SsRs7vjIcLrU85W8J",
  "5 Seconds of Summer": "5Rl15oVamLq7FbSb0NNBNy",
  "Flume": "6nxWCVXbOlEVRexSbLsTer",
  "Vance Joy": "4t3V6FmFek1xgycuGMXUC8",
  "Tones and I": "2NjfBq1NflQcKSeiDooVjY",
  "Olivia Newton-John": "4BoRxUd2gIL6XmRF43yYjE",
  "Crowded House": "7ohlPA8dRBtCf92zaZCaaB",
  "Midnight Oil": "72KyoXzp0NOQij6OdxZU8v",
  "Troye Sivan": "3wgKjDPJsyfKJqSw1D2OX9",
  "Savage Garden": "3NRFinRTEqUCfaTTZmk8ek",
  "Bee Gees": "1LZEQNv7sE11VDY3SdxQeN",
  "Gotye": "2AsusXITU8P25dlRNhcAbG",
  "Men at Work": "2AVL6xWXWDfbWJU2dtwnbK",
  "Little River Band": "2h8tm8VNiSN4gRx2xlcZro",
  "Powderfinger": "6CtmDGPBgCgqi9jyPTrp0z",
  "Jet": "1O8XGzxrnspW6Dr15nAdp7",
  "The Temper Trap": "5DlZ8ZDL6o3w1oP6D5x88E",
  "Cold Chisel": "1VQU80j4bajMyhrappp2Wu",
  "Jimmy Barnes": "18ex7fb4GXixkrqGllEI2y",
  "John Farnham": "0ECfNFhT4Bu6AsNYj6Yt6c",
  "Delta Goodrem": "2g3fa7fGdLrq8RvfxIG2DA",
  "Jessica Mauboy": "6rHWAH6F4mr2AViSxMV413",
  "Missy Higgins": "6zwvKusBTrLlUoEK5aIaxW",
  "Silverchair": "2i7NgLxqkUZ1v2c4rWGcd5",
  "Wolfmother": "5yEtAZ4mpN6t7BXi9t5cD8",
  "Empire of the Sun": "5XKp3UyavIBUeu2Wn9i3LL",
  "Rüfüs Du Sol": "15CyGCi1TN2P1o0gOKu9C0",
  "The Avalanches": "3C8RpaI3Go63yVnThsvsow",
  "Paul Kelly": "0S2io3xMLiUAFlQBub0C0L",
  "Courtney Barnett": "5DzwoCunVfJq3upy5Yc7W6",
  "Tash Sultana": "6zVFRTB0Y1whWyH7ZNmywf",
  "Amy Shark": "2DORQjKJVYZJiMygB4g60F",
  "Dean Lewis": "3QSQFmccmX81fWCUSPTS7y",
  "Hilltop Hoods": "7dlqUnjoF2U2DkRIPW4XnV",
  "King Gizzard & the Lizard Wizard": "6XYvaoDGE0VmRt83Jss9Sn",
  "Angus & Julia Stone": "4g8i6U3BjimbEbJTrJGOI4",
  "G Flip": "4sRkBJqmisoVxcx04LsBr1",
  "DMA's": "1lUTpzAubjqQ5SqF4kShds",
  "Ocean Alley": "18QWHphtWroSXmUdxGgx2E",
  "Daine": "4REUzKi1bdPhpd1aBJR4bs",
  "Baker Boy": "6Qpa8xhGsGitz4WBf4BkpK"
};

// Get direct Spotify artist URL
export const getSpotifyArtistUrl = (artistName) => {
  const artistId = spotifyArtistIds[artistName];
  if (artistId) {
    return `https://open.spotify.com/artist/${artistId}`;
  }
  // Fallback to search if no ID found
  return `https://open.spotify.com/search/${encodeURIComponent(artistName)}?type=artist`;
};
