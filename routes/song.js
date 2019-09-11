const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.post('/add', ctrl.song.add);
router.get('/index', ctrl.song.index);
router.delete('/delete/:id',ctrl.song.deleteSong);
module.exports = router;
