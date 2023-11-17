// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://heyayomideadebisi:<password>@first-cluster.q1xtx2w.mongodb.net/?retryWrites=true&w=majority";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);

const mongoose = require("mongoose");
const User = require("./User");

const createUser = async () => {
  try {
    // const user = await User.create({
    //   name: "Thats aint my name",
    //   age: 30,
    //   email: "ayodasilva12@gmail.com",
    //   hobbies: ["weight lifing", "fighting"],
    //   createdAt: new Date(),
    //   address: {
    //     street: "Oke baale, Uniosun",
    //     city: "Osogbo",
    //   },
    //   bestFriend: "6557f10bd73f4b0d2ab2c07b",
    // });
    const user = await User.findOneAndUpdate()
    console.log(user);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = { createUser };
