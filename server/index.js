const mongoose = require("mongoose");
const express = require("express");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const app = express();

const auth = require("./routes/auth");
// const refreshRoute = require("./routes/refreshTokenRoute");
// const postRoute = require("./routes/postRoute");

const port = process.env.PORT || 3002;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// middleaware for cookie parser
app.use(cookieParser());

const startDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("database is connected!")
  } catch (error) {
    console.log(error)
  }
};
startDb()

app.get("/", (req, res) => {
  res.status(200).send("hello backend coders");
});

app.use("/api/auth", auth);

app.listen(port, () => console.log(`server listening on port: ${port}`));
