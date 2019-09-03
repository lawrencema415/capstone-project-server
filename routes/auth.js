const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.post('/register', ctrl.auth.register);
router.post('/login', ctrl.auth.login);
router.post('/verify', ctrl.auth.verify);
router.post('/logout',ctrl.auth.verify);

module.exports = router;
