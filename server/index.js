const mongoose = require("mongoose");
const express = require("express");
require("dotenv").config()

const app = express();
const port = process.env.PORT || 3002
const { createUser } = require("./libs/db");

app.use(express.json())
app.use(express.urlencoded({extended: true}))

const startDb = async () => {
  await mongoose.connect( process.env.MONGO_URL );
};

app.get("/", (req, res) => {
  res.status(200).send("hello backend coders");
});
app.use("/api", createUser);

startDb()
  .then(console.log("database is connected!"))
  .catch((e) => console.log(e));
  
app.listen(port, () => console.log(`server listening on port: ${port}`));



