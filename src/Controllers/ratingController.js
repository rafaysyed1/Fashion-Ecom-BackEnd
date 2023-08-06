const Rating = require('../Models/ratingModels')
const Product = require('../Models/productModel')

const doRateProduct = async (req, res) => {
  try {
    const { userId, productId, rating, review } = req.body;

    // Validate the rating
    if (rating < 1 || rating > 5) {
      return res.status(400).json({ message: 'Rating must be between 1 and 5' });
    }

    // Find the product
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    // Create a new rating
    const newRating = new Rating({
      user: userId,
      productId: productId,
      rating: rating,
      review: review
    });

    // Save the rating
    await newRating.save();

    // Update the product with the rating ID
    product.ratings.push(newRating._id);
    await product.save();

    // Send success response
    res.status(201).json({ message: 'Rating added successfully', rating: newRating });
  } catch (error) {
    console.error('Error while adding rating:', error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
    doRateProduct
};
