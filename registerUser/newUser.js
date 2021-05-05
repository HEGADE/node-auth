// middleware helps you to create user and ,one can perform additional logics here like checking for user existence
let { createToken } = require("../tokenCreation/token");
module.exports = async (req, res, next) => {
  let { username } = req.body;
  if (!username) {
    return res.json({ token: null, msg: "Username is not provided/-2" });
  }
  let token = await createToken(username);

  req.token = token;
  req.msg = 1;
  next();
};
