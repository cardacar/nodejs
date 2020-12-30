const {Router} = require('express');
const router = Router();
const _ = require('underscore');

const movies = require('../src/example.json');

router.get('/', (req, res)=>{
    res.json(movies);
});

//Recivo datos de una pagina
router.post('/', (req, res)=>{
    //datos recibidos
    const {title, director, year, rating} = req.body;

    //Verifico que los datos existan
    if(title && director && year && rating){
        //Creo un id
        const id = movies.length+1;
        //Creo un nuevo objeto con los mismo datos recibidos
        const newMovie = {...req.body, id};
        //Agrego los datos al servidor, tambien se puede hacer a la base de datos
        movies.push(newMovie);
        //Actualizo las movies
        res.json(movies);
    }else{
        res.status(500).json({error:'There was an error'});
    }
});

//PUT-> Actualizar datos
router.put('/:id', (req, res)=>{
    const { id} = req.params;
    const {title, director, year, rating} = req.body;
    if(title && director && year && rating){
        _.each(movies, (movie, i)=>{
            if(movie.id == id){
                movie.title = title;
                movie.director = director;
                movie.year = year;
                movie.rating = rating;
            }
        });
        res.json(movies);
    }else{
        res.status(500).json({error: 'There was an error'});
    }

});

//Metodo para eliminar datos
router.delete('/:id', (req, res) =>{
    //req.params me obtiene el dato que especifico
    const { id} = req.params;
    //_.each me recorre todo el arreglo de movies
    _.each(movies, (movie,i)=>{
        if(movie.id == id){
            movies.splice(i, 1);
        }
    });
    res.send(movies);
});


module.exports = router;