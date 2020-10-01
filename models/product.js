const mongoose = require("mongoose");

const Schema = mongoose.Schema;

/*
    In userId, we have ref: 'User' which is refering to 
    the user model
    It has to match the 1st argument of the export in user.js 
    model
*/
const productSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    require: true,
  },
});

/*
    This come with a method that will 
    create a collection called 'products' in database
*/
module.exports = mongoose.model("Product", productSchema);
