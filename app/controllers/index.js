require('angular');

module.exports = angular.module('app')
    .controller('HomeCtrl', require('./HomeCtrl'))
    .controller('WeatherCtrl', require('./WeatherCtrl'))
    .controller('HeaderCtrl', require('./HeaderCtrl'));
