const {Router} = require('express');
const router = Router();

const movies = require('../src/example.json');

router.get('/', (req, res)=>{
    res.json(movies);
});

router.post('/', (req, res)=>{
    const {title, director, year, rating} = req.body;
    if(title && director && year && rating){
        const id = movies.length+1;
        const newMovie = {...req.body, id};
        console.log(newMovie);
        movies.push(newMovie);
        res.json(movies);
    }else{
        res.status(500).json({error:'There was an error'});
    }
});


module.exports = router;