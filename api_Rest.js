//Aprendiendo REST API-> Youtube fazt

const express = require('express');
const morgan = require('morgan');
const app = express();

//Settings->Configuraciones del servidor
app.set('port', process.env.PORT ||3000);//Se usa process.env.PORT cuando me dan un puerto en un servicio en la nube
app.set('json spaces', 2);


//Middlewares
app.use(morgan('dev'));//Sirve como log
//app.use(express.urlencoded({extends: false}));//Leer los datos que vienen de inputs->deprecado y no es recomendable usarlo a dia de hoy
app.use(express.json());//Para poder leer formatos json


//Routes->Aca se confifura las rutas del servidor->Empieza el REST API
app.use(require('./routes/index'));
app.use('/api/movies',require('./routes/movies'));


//Starting the server
app.listen(app.get('port'), ()=>{
    console.log('Server on port 3000')
});