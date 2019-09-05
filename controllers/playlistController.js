const db = require('../models');

const index = (req,res) => {
  db.Playlist.find({}, (err,foundPlaylists) => {
    if (err) return req.status(500).json({ status:500 , message: "Something went wrong, please try again."});

    res.status(200).json({ status:200, data:foundPlaylists});
  });
};

const add = (req,res) => {
  db.Playlist.create(req.body, (err, newPlaylist) => {
    if(err) return res.status(400).json({status:400, message: "Something went wrong please try again.."});

    res.status(201).json({status: 201, data: newPlaylist});
  });
};

const addSong = (req,res) => {
  db.Playlist.findById(req.params.id, (err,foundAlbum) => {
    if(err) return res.status(400).json({status:400,message:"Song not found, please try again with another id"});


  })
}


const deletePlaylist = (req,res) => {
  db.Playlist.findByIdAndDelete(req.params.id, (err,deletedPlaylist) => {
    if (err) return res.status(400).json({status:400, message: "Something went wrong please try again.."});

    res.status(200).json({status:200, message: "The playlist has been deleted."});
  });
};

module.exports = {
  index,
  add,
  deletePlaylist,
  addSong
}
