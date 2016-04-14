angular.module('blognodejs.post', []);

// Fazendo a configuração do módulo, criando as rotas
angular.module('blognodejs.post').config(function($routeProvider){
    $routeProvider
        .when('/usuarios/:id/posts',{
            controller: 'PesquisaPostController',
            templateUrl: 'modulos/post/pesquisa/view.html'
        })

        .when('/usuarios/:id/posts/novo', {
            controller: 'RegistroPostController',
            templateUrl: 'modulos/post/cadastro/view.html'
        });

});