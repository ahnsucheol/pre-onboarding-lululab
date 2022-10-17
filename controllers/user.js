const user = require('../services/user');

const pong = async (req, res) => {
  try {
    res.status(200).json({ message: 'pong' });
  } catch (err) {
    console.log(err);
    res.status(500).json(err.message);
  }
};

const signup = async (req, res) => {
  const { name, email, password, phoneNumber } = req.body;
  try {
    await user.signup(name, email, password, phoneNumber);
    res.status(201).json({ message: 'signup successful' });
  } catch (err) {
    console.log(err);
    res.status(err.status || 500).json(err.message);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const token = await user.login(email, password);
    res.status(200).json({ token: token });
  } catch (err) {
    console.log(err);
    res.status(err.status || 500).json(err.message);
  }
};

module.exports = { pong, signup, login };
