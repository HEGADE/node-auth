//middleware helps you to create user

let { createToken } = require("../tokenCreation/token");

const bcrypt = require("bcryptjs");
const userData = require("../db/db");
const checkUser = require("../db/userExitsONot");
module.exports = async (req, res, next) => {
  let { username, password } = req.body;
  if (!username.trim() || !password.trim()) {
    return res.json({
      token: null,
      msg: "Do not forget to fill the user name and password/-4",
    });
  }
  let isThere = await checkUser(username.trim());
  if (!isThere) {
    const hashedPassword = await bcrypt.hash(password, 10);
    let createUser = await new userData({ username, password: hashedPassword });
    createUser.save();

    let token = await createToken(username);

    req.token = token;
    req.stat = 201;
    req.msg = "user created /1";
    return next();
  }

  req.token = null;
  req.msg = "user already exits/-3";
  return next();
};
