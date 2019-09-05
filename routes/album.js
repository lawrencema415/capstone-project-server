const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.post('/add', ctrl.album.add);
router.get('/index', ctrl.album.index);
router.delete('/delete/:id',ctrl.album.deleteAlbum);
router.put('/addSong/:id',ctrl.album.addSong);
module.exports = router;
