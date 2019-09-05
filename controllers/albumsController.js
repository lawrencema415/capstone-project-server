const db = require('../models');

const index = (req,res) => {
  db.Album.find({}, (err,foundAlbums) => {
    if (err) return req.status(500).json({ status:500 , message: "Something went wrong, please try again."});

    res.status(200).json({ status:200, data:foundAlbums});
  });
};

const add = (req,res) => {
  db.Album.create(req.body, (err, newAlbum) => {
    if(err) return res.status(400).json({status:400, message: "Something went wrong please try again.."});

    res.status(201).json({status: 201, data: newAlbum});
  });
};

const addSong = (req,res) => {
  db.Album.findById(req.params.id, (err,foundAlbum) => {
    if(err) return res.status(400).json({status:400,message:"Album not found, please try again with another id"});

  })
}

const deleteAlbum = (req,res) => {
  db.Album.findByIdAndDelete(req.params.id, (err,deletedAlbum) => {
    if (err) return res.status(400).json({status:400, message: "Something went wrong please try again.."});

    res.status(200).json({status:200, message: "The song has been deleted."});
  });
};

module.exports = {
  index,
  add,
  deleteAlbum,
  addSong
}
