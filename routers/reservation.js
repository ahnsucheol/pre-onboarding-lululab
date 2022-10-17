const express = require('express');
const {
  checkReservationList,
  reserve,
  changeReservation,
  getMyReservation,
} = require('../controllers/reservation');

const router = express.Router();

router.get('', checkReservationList);
router.post('', reserve);
router.patch('', changeReservation);
router.get('/myreservation', getMyReservation);

module.exports = router;
