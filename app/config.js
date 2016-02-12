require('angular');

angular.module('app').config(function($stateProvider, $urlRouterProvider, MyProviderProvider) {
    MyProviderProvider.setValue('My custom value');
    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'views/home.html',
            controller: 'HomeCtrl'
        })
        .state('weather', {
            url:'/weather/:city',
            templateUrl: 'views/weather.html',
            controller: 'WeatherCtrl'
        })
}).run();