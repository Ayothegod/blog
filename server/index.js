const mongoose = require("mongoose")
const express = require("express")

const app = express()
const port = 3001
const db = require("./libs/db")

// const startDb = async() => {
//     await mongoose.connect("mongodb+srv://heyayomideadebisi:qlqsAtQn7cSetOwW@first-cluster.q1xtx2w.mongodb.net/?retryWrites=true&w=majority")
// }

db().then(console.log("database is connected!")).catch(e => console.log(e))
// startDb().then(console.log("database is connected!")).catch(e => console.log(e))

app.get("/", (req, res) => {
    res.status(200).send("hello backend coders")
})

app.listen(port, () => console.log(`server listening on port: ${port}`))