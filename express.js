//Servidor con express

//Estructura basica de un servidor con express
const express = require ('express');
const app = express();

app.get('/', (req, res)=>{
    res.send('Hello world')
});

app.listen(3000, ()=>{
    console.log('Server on port 3000')
});
