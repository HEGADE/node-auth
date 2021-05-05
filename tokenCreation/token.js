const jwt = require("jsonwebtoken");
const createToken = async (username) => {
  console.log(username);
  try {
    token = await jwt.sign({ username }, process.env.SEC_KEY);
    console.log(token);
    return token;
  } catch (e) {
    console.log("some error");
  }
};
module.exports = { createToken };
