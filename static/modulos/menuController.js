angular.module('blognodejs').controller('MenuController', function($scope, usuarios, $location){

    var carregarUsuario = function() {
        return usuarios.getUsuarioLogado();
    }

    $scope.usuarioLogado = carregarUsuario();

    $scope.sair = function(usuarioLogado) {
        usuarios.sair();
        $location.path('/');
    }
});