const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const SongSchema = new Schema({
  name: {
    type: String
  },
  artist: String,
  url: {
    type: String
  },
  feature: [String],
  picture: {
    type: String
  },
  length: String
});

const Song = mongoose.model('song', SongSchema);
module.exports = Song;
