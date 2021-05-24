/* You cam write user validating logic here
 login like fetching user name from data base and checking whether the user exits or not
 also can be used for validating user password */

const checkUser = require("../db/userExitsONot");
const userData = require("../db/db");
const bcrypt = require("bcryptjs");

module.exports = async (req, res, next) => {
  if (await checkUser(req.body.username)) {
    let userDataFromDataBase = await userData.findOne({
      username: req.body.username,
    });
    let { password } = userDataFromDataBase;

    let isMatch = await bcrypt.compare(req.body.password, password);

    if (isMatch) return next();
  }

  res.json({ token: null, msg: "Invalid credentials/-1" });
};
