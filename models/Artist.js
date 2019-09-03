const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Song = require('./Song');
const Album = require('./Album');
const ArtistSchema = new Schema({
  name: {
    type: String
  },
  albums:
    [Album.schema],
  songs:
    [Song.schema]
  ,
  picture: {
    type: String
  }
});

const Artist = mongoose.model('artist', ArtistSchema);
module.exports = Artist;
