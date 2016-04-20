angular.module('blognodejs').controller('MenuController', function($scope, usuarios, $location){

    var carregarUsuario = function() {
        return usuarios.getUsuarioLogado();
    }

    $scope.usuarioLogado = carregarUsuario();

    $scope.sair = function(usuarioLogado) {
        sair($scope.usuarioLogado);
    }

    var sair = function(usuario) {
        $scope.usuarioLogado = null;
        $location.path('/');
    }

    // Criando os Listeners (Encarregados de ouvirem as requisições)
    $scope.$on('usuario.entrou', function(evento, usuario){
        console.log('Recebendo evento: usuario entrou, '+usuario);
        $scope.usuarioLogado = usuario;
        $location.path('usuarios/'+usuario.id+'/posts');
    });

    // Criando os Listeners (Encarregados de ouvirem as requisições)
    $scope.$on('usuario.saiu', function(evento, usuario){
        console.log('Recebendo evento: usuario saiu, '+usuario);
        sair(usuario);
    });

});