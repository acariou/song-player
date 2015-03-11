'use strict';

/**
 * @ngdoc overview
 * @name angularsrssApp
 * @description
 * # angularsrssApp
 *
 * Main module of the application.
 */
angular
  .module('songPlayerApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
