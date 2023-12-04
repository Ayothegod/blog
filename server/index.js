const mongoose = require("mongoose");
const express = require("express");
const cookieParser = require("cookie-parser")
require("dotenv").config()
const app = express();

const authRoute = require("./routes/authRoute")
const postRoute = require("./routes/postRoute")
const port = process.env.PORT || 3002
const { createUser } = require("./libs/db");

app.use(express.json())
app.use(express.urlencoded({extended: true}))

// middleaware for cookie parser
app.use(cookieParser())


app.get("/", (req, res) => {
  res.status(200).send("hello backend coders");
});
app.use("/api", authRoute)
app.use("/api", postRoute)

// const startDb = async () => {
//   await mongoose.connect( process.env.MONGO_URL );
// };

// startDb()
//   .then(console.log("database is connected!"))
//   .catch((e) => console.log(e));
  
app.listen(port, () => console.log(`server listening on port: ${port}`));



