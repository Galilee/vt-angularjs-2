require('angular');

angular.module('app').config(function($stateProvider, $urlRouterProvider, MyProviderProvider) {
    MyProviderProvider.setValue('My custom value');
    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'views/home.html'
        })
}).run();