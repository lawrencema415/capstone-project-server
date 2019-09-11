const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.post('/add', ctrl.artist.add);
router.get('/index', ctrl.artist.index);
router.delete('/delete/:id',ctrl.artist.deleteArtist);
router.get('/view/:id',ctrl.artist.viewArtist);
module.exports = router;
