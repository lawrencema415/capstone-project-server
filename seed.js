const songs = require('./musicSeed.json');
const db = require('./models');

db.Song.create(songs, (err,createdSong) => {
  if(err) return console.log(err);
  console.log(createdSong);
});
