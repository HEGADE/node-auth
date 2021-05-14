const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  let token = req.headers["auth-token"];

  try {
    if (!token) return res.status(401).json({ msg: " access denied😐/-2" });
    const { username } = await jwt.verify(token, process.env.SEC_KEY);
    req.username = username;

    next();
  } catch (e) {
    res.status(401).json({ msg: "Invalid credentials😗/-1" });
  }
};
