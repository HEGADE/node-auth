const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  let token = req.headers["auth-token"];
  try {
    if (!token) return res.status(401).send(" access denied");
    const decode = await jwt.verify(token, process.env.SEC_KEY);
    req.username = decode.username;
    console.log(decode);

    next();
  } catch (e) {
    res.send("invalid credentials");
  }
};
