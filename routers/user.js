const express = require('express');
const { pong, signup, login } = require('../controllers/user');

const router = express.Router();

router.get('', pong);
router.post('/signup', signup);
router.post('/login', login);

module.exports = router;
