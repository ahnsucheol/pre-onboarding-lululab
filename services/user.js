const user = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const signup = async (name, email, password, phoneNumber) => {
  const result = await user.emailCheck(email);
  if (result.length == 0) {
    const hashedPw = await bcrypt.hash(password, 10);
    await user.signup(name, email, hashedPw, phoneNumber);
  } else {
    const err = new Error('이미 가입된 이메일입니다.');
    err.status = 409;
    throw err;
  }
};

const login = async (email, password) => {
  const user_id = await user.getUserByEmail(email);
  if (user_id) {
    const correct = await bcrypt.compare(password, user_id.password);
    if (correct) {
      const token = jwt.sign({ userId: user_id.id }, process.env.SECRET_KEY, {
        expiresIn: '1h',
      });
      return token;
    } else {
      const err = new Error('비밀번호가 틀렸습니다.');
      err.status = 401;
      throw err;
    }
  } else {
    const err = new Error('존재하지 않는 이메일입니다.');
    err.status = 404;
    throw err;
  }
};

module.exports = { signup, login };
