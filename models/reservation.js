const { myDataSource } = require('./typeorm-client');

const checkReservationList = async (reservation_date, reservation_time) => {
  console.log(reservation_time);
  const list = await myDataSource.query(
    `
      SELECT 
      hospitals.name, hospitals.phone_number
        FROM hospitals
        LEFT JOIN availableTimeByHospital ON hospitals.id = availableTimeByHospital.hospital_id
        LEFT JOIN reservation_time ON reservation_time.id = availableTimeByHospital.time_id
        WHERE reservation_time.time = ?;
    `,
    [reservation_time]
  );
  return list;
};

const getType = async reservation_type => {
  const type = await myDataSource.query(
    `
      SELECT id FROM reservation_type WHERE reservation_type.type = ?
    `,
    [reservation_type]
  );
  return type;
};

const reserve = async (
  user_id,
  reservation_date,
  reservation_time,
  type_id,
  hospital_id,
  reserve_number
) => {
  await myDataSource.query(
    `
      INSERT INTO reservations(hospital_id, user_id, reserve_date, reserve_time, reserve_type, reserve_number) VALUES(?,?,?,?,?,?);
    `,
    [
      hospital_id,
      user_id,
      reservation_date,
      reservation_time,
      type_id,
      reserve_number,
    ]
  );
};

const checkTime = async (hospital_id, reservation_time) => {
  return (correctTime = await myDataSource.query(
    `
      SELECT EXISTS 
        (SELECT 
          * 
          FROM availableTimeByHospital 
          LEFT JOIN reservation_time on reservation_time.id = availableTimeByHospital.time_id 
          WHERE hospital_id= ? AND time = ?) correct
    `,
    [hospital_id, reservation_time]
  ));
};

const isDuplicateReserveByUser = async user_id => {
  const duplicate = await myDataSource.query(
    `
      SELECT EXISTS
        (SELECT * FROM reservations WHERE user_id = ?) duplicate; 
    `,
    [user_id]
  );
  return duplicate;
};

const isDuplicateReserveByTime = async (
  hospital_id,
  reservation_date,
  reservation_time
) => {
  const duplicate = await myDataSource.query(
    `
      SELECT EXISTS
        (SELECT 
          * 
          FROM reservations 
          WHERE hospital_id = ? AND reserve_date = ? AND reserve_time = ?) duplicate;
    `,
    [hospital_id, reservation_date, reservation_time]
  );
  return duplicate;
};

const isCorrectUser = async (user_id, reserve_number) => {
  const correct = await myDataSource.query(
    `
      SELECT EXISTS
        (SELECT * FROM reservations WHERE user_id = ? AND reserve_number = ?) correct
    `,
    [user_id, reserve_number]
  );
  return correct;
};

const changeReservation = async (
  user_id,
  reservation_date,
  reservation_time,
  reservation_type
) => {
  let query = `UPDATE reservations SET`;
  let params = [];
  if (reservation_date) {
    query += ` reserve_date = ?`;
    params.push(reservation_date);
  }
  if (reservation_time) {
    query += `, reserve_time = ?`;
    params.push(reservation_time);
  }
  if (reservation_type) {
    query += `, reserve_type = ?`;
    params.push(reservation_type);
  }
  query += ` WHERE user_id = ?`;
  params.push(user_id);
  await myDataSource.query(query, params);
};

const checkHospitalIdByReserveNumber = async reserve_number => {
  const hospital_id = await myDataSource.query(
    `
      SELECT hospital_id FROM reservations WHERE reserve_number = ?;
    `,
    [reserve_number]
  );
  return hospital_id;
};

const getMyReservation = async (user_id, reserve_number) => {
  let query = `
  SELECT 
    users.name AS user_name, users.phone_number AS user_phone_number, users.email, hospitals.name, hospitals.phone_number AS hospital_phone_number, reservation_type.type, DATE_FORMAT(reservations.reserve_date, '%Y-%m-%d') reserve_date, reservations.reserve_time, reservations.reserve_number
    FROM reservations
    LEFT JOIN users ON users.id = reservations.user_id
    LEFT JOIN hospitals ON hospitals.id = reservations.hospital_id
    LEFT JOIN reservation_type ON reservation_type.id = reservations.reserve_type
    WHERE 
  `;
  let params = [];
  if (user_id) {
    query += `user_id = ? `;
    params.push(user_id);
  }
  if (reserve_number) {
    query += `reserve_number = ? `;
    params.push(reserve_number);
  }
  const myReserve = await myDataSource.query(query, params);
  return myReserve;
};

module.exports = {
  checkReservationList,
  reserve,
  getType,
  checkTime,
  isDuplicateReserveByUser,
  isDuplicateReserveByTime,
  isCorrectUser,
  changeReservation,
  checkHospitalIdByReserveNumber,
  getMyReservation,
};
