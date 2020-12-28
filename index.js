//Creando servidor http con node
/* const http = require('http');
 
const handleServer = function(req, res){
    res.writeHead(200, {'Content-type': ' text/html'});
    res.write('<h1>Hola mundo desde Nodejs</h1>');
    res.end();
};

const server = http.createServer(handleServer);

server.listen(3000, function(){
    console.log('Servidor en el puerto 3000');
}); */

//Creando server con nodejs
const express = require ('express');
const morgan = require('morgan');
const app = express();



//Hacer que express sea capaz de leer un json
app.use(express.json());
app.use(morgan('dev'));

//Rutas pedidas por el servidor
app.get('/user', (req, res)=>{
    res.json({
        username: 'Carlos',
        lastName: 'Quiros'
    });
});

app.put('/about', (req,res)=>{
    res.send('Peticion put al servidor');
});

app.delete('/contact', (req,res)=>{
    res.send('Peticion delete al servidor');
});

app.post('/test', (req,res)=>{
    res.send('Peticion post al servidor');
});

app.use(express.static('public'));


//Inicio del servidor
app.listen(5000, ()=>{
    console.log('Server on port 5000')
});



