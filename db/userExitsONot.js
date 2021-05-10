const userData = require("../db/db");
const checkUser = async (username, password = null) => {
  let user;
  if (password === null) {
    try {
      user = await userData.findOne({ username });
    } catch (error) {
      console.log(error);
      return;
    }
    if (user) return true;
    return false;
  }
};
module.exports = checkUser;
