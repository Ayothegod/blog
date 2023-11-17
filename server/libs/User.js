const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  updatedAt: Date,
  bestFriend: mongoose.SchemaTypes.ObjectId,
  hobbies: [String],
  address: {
    street: String,
    city: String,
  },
});

module.exports = mongoose.model("User", userSchema);
