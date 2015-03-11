'use strict';

/**
 * @ngdoc function
 * @name songPlayerApp.controller:PlayerCtrl
 * @description
 * # PlayerCtrl
 * Controller of the songPlayerApp
 */
angular
    .module('songPlayerApp')
    .controller('PlayerCtrl', function ($scope) {
        $scope.track = {
            name: '',
            artist: {
                name: ''
            },
            album: {
                name: ''
            }
        };
    });