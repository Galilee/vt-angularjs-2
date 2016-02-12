require('angular');
require('angular-ui-router');

var app = angular.module('app', ['ui.router']);

// load config
require('./config');

// load parameters
require('./parameters');

// load controllers
require('./controllers');

// load services
require('./services');

// directives
require('./directives');




