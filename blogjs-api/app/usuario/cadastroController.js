var usuarios = require('./usuarios');

var cadastrar = function(request, response) {
    var usuario = request.body;
   usuarios.cadastrar(usuario);
    //console.log(usuario);
    response.status(201).json(usuario);
};

exports.cadastrar = cadastrar;