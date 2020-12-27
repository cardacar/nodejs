//Creando servidor http con node
const http = require('http');
 
const handleServer = function(req, res){
    res.writeHead(200, {'Content-type': ' text/html'});
    res.write('<h1>Hola mundo desde Nodejs</h1>');
    res.end();
};

const server = http.createServer(handleServer);

server.listen(3000, function(){
    console.log('Servidor en el puerto 3000');
});

