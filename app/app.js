'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'ngTouch',
    'ui.bootstrap',
    'angularCSS'
]).config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    // $locationProvider.html5Mode(true);

    $routeProvider.otherwise({redirectTo: '/jobs'});
}]);
