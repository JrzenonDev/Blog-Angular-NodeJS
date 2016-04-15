angular.module('blognodejs.post').controller('VisualizacaoPostController', function($scope, $routeParams, posts, usuarios){

    var carregarPost = function() {
        var postId = parseInt($routeParams.postId);
        return post =  posts.buscar(postId);
    }

    var carregarUsuario = function() {
        return usuario = usuarios.buscar(parseInt($routeParams.id));
    }

    $scope.usuario = carregarUsuario();
    $scope.post = carregarPost();

});


