const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.post('/add', ctrl.playlist.add);
router.get('/index', ctrl.playlist.index);
router.delete('/delete/:id',ctrl.playlist.deletePlaylist);
router.put('/addSong/:id',ctrl.playlist.addSong);
router.get('/userPlaylist/:id',ctrl.playlist.userPlaylist);
router.get('/view/:id',ctrl.playlist.viewPlaylist);
router.put('/editName/:id', ctrl.playlist.editName);
module.exports = router;
