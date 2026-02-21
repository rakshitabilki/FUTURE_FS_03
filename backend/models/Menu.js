const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
  name: String,
  category: String,
  price: Number,
  type: {
    type: String,
    enum: ["veg", "non-veg"]
  }
});

module.exports = mongoose.model("Menu", menuSchema);
