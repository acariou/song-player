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
      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
        .when('/', {
            templateUrl: 'views/player.html',
            controller: 'PlayerCtrl'
        })
      .otherwise({
        redirectTo: '/'
      });
  });
