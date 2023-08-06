const express = require('express')
const router = express.Router()
const {doRateProduct}= require('../Controllers/ratingController')


router.post('/addRating',doRateProduct)
module.exports = router