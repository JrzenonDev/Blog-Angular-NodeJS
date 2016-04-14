angular.module('blognodejs.post').controller('VisualizacaoPostController', function($scope, $routeParams, posts){

    $scope.carregarPost = function() {
        var postId = $routeParams.postId;
        $scope.post =  posts.buscar(postId);
    }

});


