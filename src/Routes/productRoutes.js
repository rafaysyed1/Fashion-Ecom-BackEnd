const express = require('express')
const router = express.Router()
const {doCreateProducts,doGetProducts} = require('../Controllers/productControllers')
router.post('/createProduct',doCreateProducts );
router.get('/getProducts',doGetProducts)


module.exports = router;