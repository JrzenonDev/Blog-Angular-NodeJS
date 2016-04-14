
angular.module('blognodejs.usuario', []);

// Fazendo a configuração do módulo, criando as rotas
angular.module('blognodejs.usuario').config(function($routeProvider){
    $routeProvider
        .when('/usuario/cadastro',{
            controller: 'CadastroUsuarioController',
            templateUrl: 'modulos/usuario/cadastro/view.html'
        })

        .when('/login', {
            controller: 'LoginController',
            templateUrl: 'modulos/usuario/login/view.html'
        })
});