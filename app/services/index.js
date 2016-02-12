require('angular');

module.exports =
    angular.module('app')
        .service('MyService', require('./MyService'))
        .factory('MyFactory', require('./MyFactory'))
        .provider('MyProvider', require('./MyProvider'))
        .factory('WeatherService', require('./WeatherService'))
        .factory('CityService', require('./CityService'));
