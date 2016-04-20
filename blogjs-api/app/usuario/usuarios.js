var usuarios = [];
var id = 0;

var cadastrar = function(usuario) {
    id++;
    usuario.id = id;
    usuarios.push(usuario);
}

exports.cadastrar = cadastrar;