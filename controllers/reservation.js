const reservation = require('../services/reservation');

const checkReservationList = async (req, res) => {
  const { reservation_date, reservation_time } = req.body;
  try {
    const list = await reservation.checkReservationList(
      reservation_date,
      reservation_time
    );
    res.status(200).json({ data: list });
  } catch (err) {
    console.log(err);
    res.status(err.status || 500).json(err.message);
  }
};

const reserve = async (req, res) => {
  const { token } = req.headers;
  const { reservation_date, reservation_time, reservation_type, hospital_id } =
    req.body;
  try {
    const return_data = await reservation.reserve(
      token,
      reservation_date,
      reservation_time,
      reservation_type,
      hospital_id
    );
    res.status(201).json({ message: '예약 성공', reserve_number: return_data });
  } catch (err) {
    console.log(err);
    res.status(err.status || 500).json(err.message);
  }
};

const changeReservation = async (req, res) => {
  const { token } = req.headers;
  const {
    reserve_number,
    reservation_date,
    reservation_time,
    reservation_type,
  } = req.body;
  try {
    await reservation.changeReservation(
      token,
      reserve_number,
      reservation_date,
      reservation_time,
      reservation_type
    );
    res.status(201).json({ message: '예약 변경 성공' });
  } catch (err) {
    console.log(err);
    res.status(err.status || 500).json(err.message);
  }
};

const getMyReservation = async (req, res) => {
  console.log('token', req.headers.token);
  const { token } = req.headers;
  const { reserve_number } = req.body;
  try {
    const myReserve = await reservation.getMyReservation(token, reserve_number);
    res.status(200).json(myReserve);
  } catch (err) {
    console.log(err);
    res.status(err.status || 500).json(err.message);
  }
};

module.exports = {
  checkReservationList,
  reserve,
  changeReservation,
  getMyReservation,
};
