const express = require("express");
const routes = express.Router();
const jwt = require("jsonwebtoken");
const User = require("../models/User");

// const refreshTokens = [];

routes.post("/login", (req, res) => {
  try {
    const { username, password } = req.body;

    if (username !== users[0].username || password !== users[0].password) {
      return res.status(401).send("wrong credentials");
    }

    // find user
    const foundUser = users.find((user) => user.username === username);

    // create jwt - sign jwt
    const accessToken = generateAccess(foundUser.username);
    const refreshToken = generateRefresh(foundUser.username);

    // save refreshToken to database with user for refreshToken route incase of cross-checking
    // console.log(refresh);

    // send refresh token to frontend via cookies
    res.cookie("jwt", refreshToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    });

    // send access token to frontend via json
    res.status(200).json({
      accessToken: accessToken,
    });
  } catch (error) {
    console.log(error);
  }
});

const generateAccess = (user) => {
  return jwt.sign({ username: user }, process.env.ACCESS_TOKEN, {
    expiresIn: "30s",
  });
};

const generateRefresh = (user) => {
  return jwt.sign({ username: user }, process.env.REFRESH_TOKEN, {
    expiresIn: "1d",
  });
};

routes.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const user = await User.create({
      username,
      email,
      password,
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json(error.message || error);
  }
});

module.exports = routes;
