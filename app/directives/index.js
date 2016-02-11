require('angular');

module.exports = function() {
    angular.modules('app.directives', [])
        .directive('MyDirective', require('./MyDirective'))
}