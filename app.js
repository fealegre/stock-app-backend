require('dotenv').config();
const express = require('express');
const app = express();
app.get('/',(req,res)=>{
    console.log('Request received');  
    res.send('<h1>HOLA MUNDO!</h1>')  
})
const PORT = process.env.PORT || 4000;
app.listen(PORT, ()=>{
    console.log(`Server listening in port ${PORT}`)
})