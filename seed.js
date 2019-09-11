const songs = require('./musicSeed.json');
const db = require('./models');
const artists = require('./artistSeed.json');

db.Song.create(songs, (err,createdSong) => {
  if(err) return console.log(err);
  console.log(createdSong);
});

db.Artist.create(artists, (err,createdArtists) => {
  if(err) return console.log(err);
  console.log(createdArtists);
})
