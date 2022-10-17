const express = require('express');
const router = express.Router();

const userRouter = require('./user');
const reservationRouter = require('./reservation');

router.use('/ping', userRouter);
router.use('/user', userRouter);
router.use('/reservation', reservationRouter);

module.exports = router;
