const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Song = require('./Song');
const User = require('./User');
const PlaylistSchema = new Schema({
  name: {
    type: String
  },
  Songs: [Song.schema],
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
});

const Playlist = mongoose.model('playlist', PlaylistSchema);
module.exports = Playlist;
