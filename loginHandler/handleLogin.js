/* Middleware  that helps you to create json web token*/

require("dotenv").config();
const jwt = require("jsonwebtoken");
let { createToken } = require("../tokenCreation/token");
module.exports = async (req, res, next) => {
  const { username, password } = req.body;

  let token = await createToken(username.trim());
  req.token = token;
  req.msg = "user successfully logged in/2";
  next();
};
