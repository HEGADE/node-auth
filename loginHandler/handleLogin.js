/* Middleware  that helps you to create json web token*/

require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  const { username, password } = req.body;
  try {
    const token = await jwt.sign({ username }, process.env.SEC_KEY);
    req.token = token;
    req.msg = 1;
    next();
  } catch (e) {
    res.json({ token: null, msg: -1 });
  }
};
