const mongoose = require('mongoose');
const DB_URL = process.env.MONGODB_URI || 'mongodb://localhost:27017/spotafly';

mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(() => console.log('MongoDB is connected.'))
  .catch((err) => console.log(`MongoDB connection error: ${err}`));

module.exports = {
  Artist: require('./Artist'),
  Album: require('./Album'),
  Playlist: require('./Playlist'),
  Song: require('./Song'),
  User: require('./User')
}
