/* You cam write user validating logic here
 login like fetching user name from data base and checking whether the user exits or not
 also can be used for validating user password */

module.exports = async (req, res, next) => {
  console.log("I'm a  user checker");
  if (req.body.username == "ninja" && req.body.password == "1234")
    return next(); // used return because better  understandability,actually return statement is not needed

  res.json({ token: null, msg: "Invalid credentials" });
};
