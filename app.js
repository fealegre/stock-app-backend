require('dotenv').config();
const { timeStamp } = require('console');
const express = require('express');
const { default: mongoose } = require('mongoose');
const path = require('path');
const app = express();
const PORT = process.env.PORT;

//CONEXION A LA BD Y LEVANTAR EL SERVIDOR CON EXPRESS
mongoose
    .connect(`mongodb+srv://alegrefer:${process.env.MONGO_DB_PASS}@development.pekjhru.mongodb.net/stock-app`)
    .then((result) => {
        app.listen(PORT, () => {
            console.log(`Server listening in port ${PORT}`);
        })
        console.log('Conexion exitosa a la BD');
    })
    .catch((error) => console.log(err));

//CREACION DEL SCHEMA DE LA BD Y EL MODELO DE PRODUCTO
const productSchema = mongoose.Schema (
    {
        name: { type: String, required: true },
        price: Number,
    },
    { timestamps: true }
);
const Product = mongoose.model('Product', productSchema);

app.use(express.json());
app.post('/api/v1/products', (req, res) => {

    const newProduct = new Product(req.body);
    newProduct
        .save()
        .then((result)=>{
            res.status(201).json({ ok: true });
        })
        .catch((err)=>console.log(err));
})

app.use(express.static(path.join(__dirname, 'public')));

