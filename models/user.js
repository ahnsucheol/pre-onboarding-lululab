const { myDataSource } = require('./typeorm-client');

const signup = async (name, email, hashedPw, phoneNumber) => {
  await myDataSource.query(
    `
      INSERT INTO users (name, email, password, phone_number) VALUES (?,?,?,?);
    `,
    [name, email, hashedPw, phoneNumber]
  );
};

const emailCheck = async email => {
  return await myDataSource.query(
    `
      SELECT email FROM users WHERE email = ?
    `,
    [email]
  );
};

const getUserByEmail = async email => {
  const [user] = await myDataSource.query(
    `
      SELECT * FROM users WHERE email = ?
    `,
    [email]
  );

  return user;
};

module.exports = { signup, emailCheck, getUserByEmail };
