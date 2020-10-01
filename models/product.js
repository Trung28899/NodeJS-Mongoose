const mongoose = require("mongoose");

const Schema = mongoose.Schema;

/*
    Defining how the products should look like
    with their data type

    Note that the id is not defined here but
    it is automatically generated
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
});

/*
    This come with a method that will 
    create a collection called 'products' in database
*/
module.exports = mongoose.model("Product", productSchema);
