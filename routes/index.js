//Creando rutas desde un archivo diferente para importalo
const {Router} = require('express');
const router = Router();

//Ruta inicial de la pagina
router.get('/', (req, res)=>{
    const data = {

    };
    res.json(data);
});


module.exports = router;