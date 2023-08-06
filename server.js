const express = require('express');
const cors = require('cors');
const db = require('./src/config/dbConfig')
const bodyParser = require('body-parser')
const productRoutes = require('./src/Routes/productRoutes')
const userRoutes = require('./src/Routes/userRoutes')
const ratingRoute = require('./src/Routes/ratingRoute')
require('dotenv').config()      
db.connection();
const app = express();
const port = 6001;


app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/user',userRoutes)
app.use('/product',productRoutes)
app.use('/rate',ratingRoute)

app.listen(port, () => console.log(`Server running on port ${port}`));
