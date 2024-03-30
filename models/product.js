const mongoose = require('mongoose');

// CREACION DEL SCHEMA DE LA BD Y EL MODELO DE PRODUCTO
const productSchema = mongoose.Schema (
    {
        name: { type: String, required: true },
        price: Number,
    },
    { timestamps: true }
);
const Product = mongoose.model('Product', productSchema);
module.exports = Product;