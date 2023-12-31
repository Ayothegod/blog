const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/User");

// routes.post("/login", (req, res) => {
//   try {
//     const { username, password } = req.body;

//     if (username !== users[0].username || password !== users[0].password) {
//       return res.status(401).send("wrong credentials");
//     }

//     // find user
//     const foundUser = users.find((user) => user.username === username);

//     // create jwt - sign jwt
//     const accessToken = generateAccess(foundUser.username);
//     const refreshToken = generateRefresh(foundUser.username);

//     // save refreshToken to database with user for refreshToken route incase of cross-checking
//     // console.log(refresh);

//     // send refresh token to frontend via cookies
//     res.cookie("jwt", refreshToken, {
//       httpOnly: true,
//       maxAge: 24 * 60 * 60 * 1000,
//     });

//     // send access token to frontend via json
//     res.status(200).json({
//       accessToken: accessToken,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// });
// const generateAccess = (user) => {
//   return jwt.sign({ username: user }, process.env.ACCESS_TOKEN, {
//     expiresIn: "30s",
//   });
// };
// const generateRefresh = (user) => {
//   return jwt.sign({ username: user }, process.env.REFRESH_TOKEN, {
//     expiresIn: "1d",
//   });
// };

router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // hash our password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json(error);
    console.log(error);
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(404).json("User not found");
    }
    const matchPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!matchPassword) return res.status(401).json("wrong credentials");

    // jwt token
    const token = jwt.sign({ id: user._id }, process.env.ACCESS_TOKEN, {
      expiresIn: "3d",
    });
    const { password, ...others } = user._doc;
    res.cookie("jwt", token).status(201).json(others);
  } catch (error) {
    res.status(400).json(error);
    console.log(error);
  }
});

router.get("/logout", async (req, res) => {
  try {
    res
      .clearCookie("jwt", { sameSite: "none", secure: true })
      .status(200)
      .json("user logged out successfully");
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
