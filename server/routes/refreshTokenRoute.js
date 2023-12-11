const express = require("express");
const routes = express.Router();
const jsonwt = require("jsonwebtoken");

const refreshTokens = [];

routes.get("/refresh", (req, res) => {
  try {
    const { jwt } = req.cookies;
    if(!jwt) return res.status(401).json("jwt cookie not available")
    console.log(jwt);

    const refreshToken = jwt

    jsonwt.verify( refreshToken, process.env.REFRESH_TOKEN, (err, user) => {
            if(err) return res.sendStatus(403)

            const newAccessToken = jsonwt.sign()
        }
    )

    res.status(200).json({
    //   accessToken: accessToken,
    
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

module.exports = routes;
