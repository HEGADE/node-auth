const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  let token = req.headers["auth-token"];
  console.log(token);
  try {
    if (!token) return res.status(401).json({ msg: " access denied/-2" });
    const decode = await jwt.verify(token, process.env.SEC_KEY);
    req.username = decode.username;
    // console.log(decode);

    next();
  } catch (e) {
    res.status(401).json({ msg: "invalid credentials/-1" });
  }
};
