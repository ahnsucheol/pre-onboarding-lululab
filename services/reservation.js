const reservation = require('../models/reservation');
const jwt = require('jsonwebtoken');

const checkReservationList = async (reservation_date, reservation_time) => {
  const list = await reservation.checkReservationList(
    reservation_date,
    reservation_time
  );
  return list;
};

const reserve = async (
  token,
  reservation_date,
  reservation_time,
  reservation_type,
  hospital_id
) => {
  const correctTime = await reservation.checkTime(
    hospital_id,
    reservation_time
  );
  console.log(correctTime);
  if (correctTime[0].correct == 1) {
    const user_id = jwt.verify(token, process.env.SECRET_KEY).userId;

    const isDuplicateReserveByUser = await reservation.isDuplicateReserveByUser(
      user_id
    );
    if (isDuplicateReserveByUser[0].duplicate == 1) {
      const err = new Error('이미 예약 하셨습니다.');
      err.status = 409;
      throw err;
    }

    const isDuplicateReserveByTime = await reservation.isDuplicateReserveByTime(
      hospital_id,
      reservation_date,
      reservation_time
    );
    if (isDuplicateReserveByTime[0].duplicate == 1) {
      const err = new Error('이미 예약된 시간입니다.');
      err.status = 409;
      throw err;
    }

    const type_id = await reservation.getType(reservation_type);
    const reserve_number =
      user_id +
      reservation_date +
      reservation_time +
      type_id[0].id +
      hospital_id;
    console.log(type_id[0].id);
    await reservation.reserve(
      user_id,
      reservation_date,
      reservation_time,
      type_id[0].id,
      hospital_id,
      reserve_number
    );
    const return_data = { reserve_number };
    return return_data;
  } else {
    const err = new Error('예약 불가능한 시간입니다.');
    err.status = 400;
    throw err;
  }
};

const changeReservation = async (
  token,
  reserve_number,
  reservation_date,
  reservation_time,
  reservation_type
) => {
  const user_id = jwt.verify(token, process.env.SECRET_KEY).userId;
  const correctUser = await reservation.isCorrectUser(user_id, reserve_number);
  if (correctUser[0].correct == 0) {
    const err = new Error('예약자가 아닙니다.');
    err.status = 403;
    throw err;
  }
  const hospital_id = await reservation.checkHospitalIdByReserveNumber(
    reserve_number
  );
  if (reservation_time) {
    const correctTime = await reservation.checkTime(
      hospital_id[0].hospital_id,
      reservation_time
    );
    if (correctTime[0].correct == 0) {
      const err = new Error('예약 불가능한 시간입니다.');
      err.status = 400;
      throw err;
    }
  }

  const isDuplicateReserveByTime = await reservation.isDuplicateReserveByTime(
    hospital_id[0].hospital_id,
    reservation_date,
    reservation_time
  );
  if (isDuplicateReserveByTime[0].duplicate == 1) {
    const err = new Error('이미 예약된 시간입니다.');
    err.status = 409;
    throw err;
  }

  if (reservation_type) {
    reservation_type = await reservation.getType(reservation_type);
  }

  await reservation.changeReservation(
    user_id,
    reservation_date,
    reservation_time,
    reservation_type
  );
};

const getMyReservation = async (token, reserve_number) => {
  let user_id;
  if (token) {
    user_id = jwt.verify(token, process.env.SECRET_KEY).userId;
  }
  const myReserve = await reservation.getMyReservation(user_id, reserve_number);
  return myReserve;
};

module.exports = {
  checkReservationList,
  reserve,
  changeReservation,
  getMyReservation,
};
