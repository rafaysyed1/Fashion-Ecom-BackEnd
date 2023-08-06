// productSchema.js
const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: ['clothing', 'shoes', 'accessories','jackets'],
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  color: {
    type: String,
  },
  size: {
    type: String,
  },
  imagesUrl: [{
    type: String,
  }],
  ratings: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ratings'
  }], 
  stock: {
    type: Number,
    required: true,
  },
},{
    timestamps :true
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
