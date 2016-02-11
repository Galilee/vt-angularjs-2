require('angular');

module.exports =
    angular.module('app')
        .service('MyService', require('./MyService'))
        .factory('MyFactory', require('./MyFactory'))
        .provider('MyProvider', require('./MyProvider'));
