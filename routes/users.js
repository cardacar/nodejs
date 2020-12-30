const {Router} = require('express');
const router = Router();

//Fetch sirve para hacer get, post, put, delete a un proveedor
const fetch = require('node-fetch');

router.get('/', async (req, res)=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const user = await response.json();
    res.json(user);
})

module.exports = router;