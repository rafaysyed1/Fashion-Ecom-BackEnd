const ProductCollection = require('../Models/productModel')
const cloudinary = require('../config/cloudinaryConfig')
const doCreateProducts = async (req, res) => {
  try {
    const { name, category, description, price, color, size, stock, imagesUrl } = req.body;
    console.log('Cloudinary Config:', cloudinary.config());

    // Prepare an array for promises to be used with Promise.all()
    const uploadPromises = imagesUrl.map((url) =>
      cloudinary.uploader.upload(url, { resource_type: 'image' })
    );

    const uploadResults = await Promise.all(uploadPromises);
    const images = uploadResults.map((result) => result.secure_url);

    // Create a new product with the Cloudinary URLs
    const product = new ProductCollection({
      name,
      category,
      description,
      price,
      color,
      size,
      imagesUrl: images,
      stock,
    });

    await product.save();

    res.status(201).json({ message: 'Product created successfully', product });
  } catch (error) {
    console.error('Error while creating new product:', error);
    res.status(500).json({ status: false, message: error.message });
  }
}


const doGetProducts = async (req, res) => {
  try {
    const products = await ProductCollection.find()
      .populate('ratings') // Populates the ratings data
      .exec();

    res.status(200).json({ message: 'Products fetched successfully', products });
  } catch (error) {
    console.error('Error while fetching products:', error);
    res.status(500).json({ status: false, message: error.message });
  }
};





module.exports = {
  doCreateProducts,
  doGetProducts
}