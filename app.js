require('dotenv').config();
const { timeStamp } = require('console');
const express = require('express');
const dbConnect = require('./db')
const cors = require('cors');
const productRouter = require('./routes/product')
const Product = require('./models/product');
const app = express();
dbConnect(app)
app.use(cors());
app.use(express.json());
app.use('/api/v1/products', productRouter)



