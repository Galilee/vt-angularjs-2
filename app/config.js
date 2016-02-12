require('angular');

angular.module('app').config(function($stateProvider, $urlRouterProvider, MyProviderProvider, APP_VERSION) {
    //custom provider config
    MyProviderProvider.setValue(APP_VERSION);

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
        .state('examples', {
            url:'/examples',
            templateUrl: 'views/examples.html',
            controller: 'ExamplesCtrl'
        })
}).run();