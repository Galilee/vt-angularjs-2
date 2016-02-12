require('angular');

module.exports =
    angular.module('app')
        .directive('myDirective', require('./MyDirective'))
        .directive('appMap', require('./AppMap'));
