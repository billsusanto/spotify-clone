/**
 * Mock data for development and demonstration
 */

export const mockTracks = [
  {
    id: '1',
    title: 'Blinding Lights',
    artist: 'The Weeknd',
    album: 'After Hours',
    albumArt: 'https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36',
    duration: 200,
    addedAt: '2024-01-15',
  },
  {
    id: '2',
    title: 'Levitating',
    artist: 'Dua Lipa',
    album: 'Future Nostalgia',
    albumArt: 'https://i.scdn.co/image/ab67616d0000b273c0e0e4c2f9e36ca9efae0006',
    duration: 203,
    addedAt: '2024-01-14',
  },
  {
    id: '3',
    title: 'Save Your Tears',
    artist: 'The Weeknd',
    album: 'After Hours',
    albumArt: 'https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36',
    duration: 215,
    addedAt: '2024-01-13',
  },
  {
    id: '4',
    title: 'Good 4 U',
    artist: 'Olivia Rodrigo',
    album: 'SOUR',
    albumArt: 'https://i.scdn.co/image/ab67616d0000b273a91c10fe9472d9bd89802e5a',
    duration: 178,
    addedAt: '2024-01-12',
  },
  {
    id: '5',
    title: 'Peaches',
    artist: 'Justin Bieber ft. Daniel Caesar & Giveon',
    album: 'Justice',
    albumArt: 'https://i.scdn.co/image/ab67616d0000b2730744690248ef3ba7b776ea7b',
    duration: 198,
    addedAt: '2024-01-11',
  },
];

export const mockPlaylists = [
  {
    id: 'p1',
    name: 'Today\'s Top Hits',
    description: 'Ed Sheeran is on top of the Hottest 50!',
    imageUrl: 'https://i.scdn.co/image/ab67706f00000002724554ed6bed6f051d9b0bfc',
    trackCount: 50,
    owner: 'Spotify',
  },
  {
    id: 'p2',
    name: 'RapCaviar',
    description: 'New music from Lil Baby, Lil Durk and Gunna.',
    imageUrl: 'https://i.scdn.co/image/ab67706f000000027ea4d505212b9de1f72c5112',
    trackCount: 50,
    owner: 'Spotify',
  },
  {
    id: 'p3',
    name: 'All Out 2010s',
    description: 'The biggest songs of the 2010s.',
    imageUrl: 'https://i.scdn.co/image/ab67706f00000002ad742fc7ab7a4f82a4f72c34',
    trackCount: 150,
    owner: 'Spotify',
  },
  {
    id: 'p4',
    name: 'Rock Classics',
    description: 'Rock legends & epic songs.',
    imageUrl: 'https://i.scdn.co/image/ab67706f00000002c6b4c171d5165f14961dcf50',
    trackCount: 100,
    owner: 'Spotify',
  },
  {
    id: 'p5',
    name: 'Chill Hits',
    description: 'Kick back to the best new and recent chill hits.',
    imageUrl: 'https://i.scdn.co/image/ab67706f00000002f6cc00da1fac1c8b64c4cfea',
    trackCount: 200,
    owner: 'Spotify',
  },
  {
    id: 'p6',
    name: 'Viva Latino',
    description: 'Today\'s top Latin hits.',
    imageUrl: 'https://i.scdn.co/image/ab67706f00000002810f3099a6c0b7b034e8864b',
    trackCount: 50,
    owner: 'Spotify',
  },
];

export const mockAlbums = [
  {
    id: 'a1',
    name: 'After Hours',
    artist: 'The Weeknd',
    imageUrl: 'https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36',
    releaseYear: 2020,
    trackCount: 14,
  },
  {
    id: 'a2',
    name: 'Future Nostalgia',
    artist: 'Dua Lipa',
    imageUrl: 'https://i.scdn.co/image/ab67616d0000b273c0e0e4c2f9e36ca9efae0006',
    releaseYear: 2020,
    trackCount: 11,
  },
  {
    id: 'a3',
    name: 'SOUR',
    artist: 'Olivia Rodrigo',
    imageUrl: 'https://i.scdn.co/image/ab67616d0000b273a91c10fe9472d9bd89802e5a',
    releaseYear: 2021,
    trackCount: 11,
  },
];

export const mockArtists = [
  {
    id: 'ar1',
    name: 'The Weeknd',
    imageUrl: 'https://i.scdn.co/image/ab6761610000e5eb214f3cf1cbe7139c1e26ffbb',
    followers: 88000000,
    verified: true,
  },
  {
    id: 'ar2',
    name: 'Dua Lipa',
    imageUrl: 'https://i.scdn.co/image/ab6761610000e5eb0a212f6bf857f33618acacba',
    followers: 82000000,
    verified: true,
  },
  {
    id: 'ar3',
    name: 'Olivia Rodrigo',
    imageUrl: 'https://i.scdn.co/image/ab6761610000e5ebe03a98785f3658f0b6461ec4',
    followers: 28000000,
    verified: true,
  },
];

export const mockCategories = [
  { id: 'c1', name: 'Pop', color: '#8B5CF6', imageUrl: 'https://i.scdn.co/image/ab67706f000000029249b35f23fb596b6f006a15' },
  { id: 'c2', name: 'Hip-Hop', color: '#E13300', imageUrl: 'https://i.scdn.co/image/ab67706f00000002982c9c37bd94e55da5e833d3' },
  { id: 'c3', name: 'Rock', color: '#DC148C', imageUrl: 'https://i.scdn.co/image/ab67706f00000002fe6d8d1019d5b302213e3730' },
  { id: 'c4', name: 'Latin', color: '#FF6B35', imageUrl: 'https://i.scdn.co/image/ab67706f00000002a713c9c6db021f66c8b194b3' },
  { id: 'c5', name: 'R&B', color: '#8D67AB', imageUrl: 'https://i.scdn.co/image/ab67706f000000020384b17e89c6b95823b4bb4f' },
  { id: 'c6', name: 'Indie', color: '#1E3264', imageUrl: 'https://i.scdn.co/image/ab67706f00000002b70e7f685b7002a4e5c07d08' },
  { id: 'c7', name: 'Electronic', color: '#00C2A8', imageUrl: 'https://i.scdn.co/image/ab67706f00000002cd5e7d479f948b6f5a7d6f3d' },
  { id: 'c8', name: 'Country', color: '#BC5900', imageUrl: 'https://i.scdn.co/image/ab67706f00000002d073e656e546e43bc387ad79' },
];
