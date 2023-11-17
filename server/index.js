const mongoose = require("mongoose");
const express = require("express");

const app = express();
const port = 3001;
const { createUser } = require("./libs/db");

app.use(express.json())
app.use(express.urlencoded({extended: true}))

const startDb = async () => {
  await mongoose.connect(
    "mongodb+srv://heyayomideadebisi:qlqsAtQn7cSetOwW@first-cluster.q1xtx2w.mongodb.net/?retryWrites=true&w=majority"
  );
};

app.get("/", (req, res) => {
  res.status(200).send("hello backend coders");
});
app.use("/api", createUser);

startDb()
  .then(console.log("database is connected!"))
  .catch((e) => console.log(e));
app.listen(port, () => console.log(`server listening on port: ${port}`));
