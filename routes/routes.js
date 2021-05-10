const route = require("express").Router();
let post = require("../post");

// route for home page ->api/
route.get("/", (req, res) => {
  post = post.filter((eachPost) => eachPost.name === req.username);

  res.status(200).json({ post, msg: "authorized/0" });
});
// route for something page ->api/something
route.get("/something", (req, res) => res.send("Just a testing route"));
module.exports = route;
