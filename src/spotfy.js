const search = (query, type) => {
  const url = fetch(`https://api.spotify.com/v1/search?q=${query}&type=${type}`).then((data) => data.json());
  return url;
};
const searchAlbums = (query) => {
  search(query, 'album');
};
const searchArtists = (query) => {
  search(query, 'artist');
};
const searchTrack = (query) => {
  search(query, 'tracks');
};
const searchPlaylist = (query) => {
  search(query, 'playlist');
};


export {
  search, searchAlbums, searchArtists, searchTrack, searchPlaylist,
};
