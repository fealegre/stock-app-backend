//CONEXION A LA BD Y LEVANTAR EL SERVIDOR CON EXPRESS
const { default: mongoose } = require('mongoose');

const dbConnect = (app)=> {
    mongoose
    .connect(`mongodb+srv://alegrefer:${process.env.MONGO_DB_PASS}@development.pekjhru.mongodb.net/stock-app`)
    .then((result) => {
        const PORT = process.env.PORT;
        app.listen(PORT, () => {
            console.log(`Server listening in port ${PORT}`);
        })
        console.log('Conexion exitosa a la BD');
    })
    .catch((error) => console.log(err));
}

module.exports = dbConnect
