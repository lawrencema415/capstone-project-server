const db = require('../models');

const index = (req,res) => {
  db.Song.find({}, (err,foundSongs) => {
    if (err) return req.status(500).json({ status:500 , message: "Something went wrong, please try again."});

    res.status(200).json({ status:200, data:foundSongs});
  });
};

const add = (req,res) => {
  db.Song.create(req.body, (err, addedSong) => {
    if(err) return res.status(400).json({status:400, message: "Something went wrong please try again.."});

    res.status(201).json({status: 201, data: addedSong});
  });
};

const deleteSong = (req,res) => {
  db.Song.findByIdAndDelete(req.params.id, (err,deletedSong) => {
    if (err) return res.status(400).json({status:400, message: "Something went wrong please try again.."});

    res.status(200).json({status:200, message: "The song has been deleted."});
  });
};

module.exports = {
  index,
  add,
  deleteSong
}
