const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Song = require('./Song');
const Artist = require('./Artist');
const AlbumSchema = new Schema({
  name: {
    type: String
  },
  artist: {
    type: Schema.Types.ObjectId,
    ref: 'Artist'
  },
  Songs: [Song.schema],
  picture: {
    type: String
  }
});

const Album = mongoose.model('album', AlbumSchema);
module.exports = Album;
