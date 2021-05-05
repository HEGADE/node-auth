let { createToken } = require("../tokenCreation/token");
module.exports = async (req, res, next) => {
  let { username } = req.body;
  if (!username) {
    return res.json({ token: null, msg: "username is not provided" });
  }
  let token = await createToken(username);

  req.token = token;
  req.msg = 1;
  next();
};
