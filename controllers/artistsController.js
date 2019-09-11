const db = require('../models');

const index = (req,res) => {
  db.Artist.find({}, (err,foundArtists) => {
    if (err) return req.status(500).json({ status:500 , message: "Something went wrong, please try again."});

    res.status(200).json({ status:200, data:foundArtists});
  });
};

const add = (req,res) => {
  db.Artist.create(req.body, (err, newArtist) => {
    if(err) return res.status(400).json({status:400, message: "Something went wrong please try again.."});

    res.status(201).json({status: 201, data: newArtist});
  });
};

const deleteArtist = (req,res) => {
  db.Artist.findByIdAndDelete(req.params.id, (err,deletedArtist) => {
    if (err) return res.status(400).json({status:400, message: "Something went wrong please try again.."});

    res.status(200).json({status:200, message: "The song has been deleted."});
  });
};

const viewArtist = (req,res) => {
  db.Artist.findById(req.params.id,(err,foundArtist)=> {
    if (err) return res.status(404).json({ status:404 , message: "Artist not found, please try another link."});
    res.status(200).json({status:200,data:foundArtist});
  })
}


module.exports = {
  index,
  add,
  deleteArtist,
  viewArtist
}
