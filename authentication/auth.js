const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  let token = req.headers["auth-token"];
  try {
    if (!token) return res.status(401).send("forbidden");
    const decode = await jwt.verify(token, process.env.SEC_KEY);
    req.username = decode.username;
    console.log(decode);

    return next();
  } catch (e) {
    res.send("invalid credentials");
  }
};
