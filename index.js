const express = require("express");
require("dotenv").config();
const authenticate = require("./authentication/auth");
const handleLogin = require("./loginHandler/handleLogin");
const authenticateUser = require("./loginHandler/authenticateUser");
const app = express();
app.use(express.json());
const route = require("./routes/routes");
const newUser = require("./registerUser/newUser");
let PORT = process.env.POST || 8000;
// main route
app.use("/api", authenticate, route);

app.post("/login", authenticateUser, handleLogin, (req, res) => {
  res.json({ token: req.token, msg: req.msg });
});
app.post("/register", newUser, (req, res) => {
  res.json({ token: req.token, msg: req.msg });
});

app.listen(8000, () => {
  console.log("Sever listening at port......  " + PORT);
});
