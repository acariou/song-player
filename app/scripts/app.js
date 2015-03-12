'use strict';

/**
 * @ngdoc overview
 * @name angularsrssApp
 * @description
 * # angularsrssApp
 *
 * Main module of the application.
 */
var app = angular.module('songplayerApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
]);

app.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
    }).otherwise({redirectTo: '/'});
  });
