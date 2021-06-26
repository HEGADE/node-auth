const express = require("express");
const cors = require("cors");
require("dotenv").config();
const authenticate = require("./authentication/auth");
const handleLogin = require("./loginHandler/handleLogin");
const authenticateUser = require("./loginHandler/authenticateUser");
const helmet =require("helmet")
const app = express();
app.use(helmet())
app.use(express.json());
app.use(cors());
const route = require("./routes/routes");
const newUser = require("./registerUser/newUser");
let PORT = process.env.POST || 8000;

// Function for handling get request on / (route url)

const showCorrectURL = () => {
  return `
  <a href="/api"> Go to main Route</a>
  
  `;
};

// main route -->/

app.get("/", (req, res) => {
  res.status(203).send(showCorrectURL());
});

// main api route --> /api
app.use("/api", authenticate, route);

// login route -->/login

app.post("/login", authenticateUser, handleLogin, (req, res) => {
  res.json({ token: req.token, msg: req.msg });
});

//register route -->/register

app.post("/register", newUser, (req, res) => {
  res.json({ token: req.token, msg: req.msg });
});

app.listen(8000, () => {
  console.log("Sever listening at port......  ", PORT);
});
