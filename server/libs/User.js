const mongoose = require("mongoose");

// const addressSchema = new mongoose.Schema({
//     street: String,
//     city: String,
// })

// schema types
// schema validation
// query basics => gt, lt, equals, linit, select, populate(get all data of linked id etc)
// schema methods/ virtuals
// schema middleware

const userSchema = new mongoose.Schema({
  name: String,
  age: {
    type: Number,
    min: 5,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    // validate function => only works on the create or save method
  },
  createdAt: {
    type: Date,
    default: new Date(),
    immutable: true,
  },
  bestFriend: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
  hobbies: [String],
  address: {
    street: String,
    city: String,
  },
});

// userSchema.methods.sayHi = function() {}

module.exports = mongoose.model("User", userSchema);
