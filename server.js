const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Iniciando o App
// * O express retorna uma função
const app = express();

// Permitir que envie dados pra aplicação no formato json
app.use(express.json());

// Permite acesso externo à API
app.use(cors());

// Iniciando o DB
mongoose.connect(
    'mongodb://localhost:27017/nodeapi', 
    { useNewUrlParser: true }
);

//require('./src/models/Product');
requireDir('./src/models');

//const Product = mongoose.model('Product');

// o use aceita todas requisições, aceita POST, GET, qqt coisa
// tudo que for da rota API, ele manda pro arquivo routes
app.use('/api', require('./src/routes'));


// * Manda o express ouvir a porta 3001 do navegador
app.listen(3001);