var express = require('express');
var app = express();
var bodyParser = require('body-parser');

//Adicionando o Middleware
app.use(bodyParser.json());

// Criando um controller
var cadastroController = require('./usuario/cadastroController');

// Definindo uma rota
app.post('/v1/usuarios', cadastroController.cadastrar);

app.listen(9000, function(){
    console.log('BlogJs API no ar...');
});