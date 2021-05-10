// Function for creating json_web_token

const jwt = require("jsonwebtoken");
const createToken = async (username) => {
  console.log(username);
  try {
    token = await jwt.sign({ username }, process.env.SEC_KEY, {
      expiresIn: "10h",
    });
    return token;
  } catch (e) {
    console.log("Some error occurred!");
  }
};
module.exports = { createToken };
