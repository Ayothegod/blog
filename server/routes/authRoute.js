const express = require("express");
const routes = express.Router();
const jwt = require("jsonwebtoken");

const users = [
  {
    username: "Ayomide",
    password: "Ayomide1234",
  },
  {
    username: "Bishop",
    password: "myBishop",
  },
];

routes.post("/login", (req, res) => {
  try {
    const { username, password } = req.body;

    if (username !== users[0].username || password !== users[0].password) {
      return res.status(401).send("wrong credentials");
    }
    // create jwt - sign jwt
    const accessToken = generateAccess(username)
    const refreshToken = generateRefresh(username)

    res.status(200).json({ 
        accessToken: accessToken,
        refreshToken: refreshToken,
     });
  } catch (error) {
    console.log(error);
  }
});

const generateAccess = (user) => {
    return jwt.sign(
        { username: user },
        process.env.ACCESS_TOKEN,
        { expiresIn: "30s" }
      );
}

const generateRefresh = (user) => {
    return jwt.sign(
        { username: user },
        process.env.REFRESH_TOKEN,
        { expiresIn: "1d" }
      );
}

module.exports = routes;
