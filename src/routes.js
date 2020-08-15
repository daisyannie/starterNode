const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController');

// Primeira rota
//* Primeiro parâmetro do get é a rota (usa '/' se for a raiz), e o segundo parâmetro é uma função que recebe 2 parâmetros, request e response.
/*
routes.get('/products', (req, res) => {

    
    //Product.create({ 
    //    title: 'React', 
    //    description: 'Build apps',
    //    url: 'www.teste'
    //});
    

    return res.send('Ok');
});
*/

routes.get("/products", ProductController.index);
routes.get("/products/:id", ProductController.show)
routes.post("/products", ProductController.store);
routes.put("/products/:id", ProductController.update);
routes.delete("/products/:id", ProductController.destroy);

// Exportar o routes daqui pra poder usar no server.js
module.exports = routes;