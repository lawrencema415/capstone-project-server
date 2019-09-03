const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Artist = require('./Artist');
const SongSchema = new Schema({
  name: {
    type: String
  },
  artist: {
    type: Schema.Types.ObjectId,
    ref: 'Artist'
  },
  url: {
    type: String
  },
  feature: [String],
  picture: {
    type: String
  }
});

const Song = mongoose.model('song', SongSchema);
module.exports = Song;
