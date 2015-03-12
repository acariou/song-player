'use strict';

/**
 * @ngdoc function
 * @name angularsrssApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularsrssApp
 */
app.controller('MainCtrl', function ($scope, $http, $timeout) {

    $scope.track = {
        name: 'lalala',
        artist: {
            name: 'toto'
        },
        album: {
            name: 'tralala'
        }
    };
    var audioPlayer = angular.element('#audioplayer'),
        audioTrack = angular.element('#audiotrack'),
        fader = angular.element('#fader'),
        playback = angular.element('#playback'),
        playbackTime = angular.element('#playbacktime'),
        playhead = angular.element('#playhead'),
        volumeSlider = angular.element('#volumeSlider'),
        duration = audioTrack.duration,

        _setText = function (el, text) {
            el.text(text);
        },

        _setAttributes = function (el, attrs) {
            for (var key in attrs) {
                el.setAttribute(key, attrs[key]);
            }
        };

    $scope.player = function() {
        if ( audioTrack.paused ) {
            _setText(playButton, 'Pause');
            audioTrack.play();
        } else {
            _setText(playButton, 'Play');
            audioTrack.pause();
        }
    };

    $scope.player = function() {
        if ( audioTrack.paused ) {
            _setText(playButton, 'Pause');
            audioTrack.play();
        } else {
            _setText(playButton, 'Play');
            audioTrack.pause();
        }
    };

    $scope.muter = function () {
        if ( audioTrack.volume == 0 ) {
            audioTrack.volume = restorValue;
            volumeSlider.value = restorValue;
        } else {
            audioTrack.volume = 0;
            restorValue = volumeSlider.value;
            volumeSlider.value = 0;
        }
    };

    $scope.volumizer = function () {
        if ( audioTrack.volume === 0 ) {
            _setText(self.muteButton, 'Unmute');
        } else {
            _setText(self.muteButton, 'Mute');
        }
    };

    $scope.finish = function () {
        audioTrack.currentTime = 0;
        _setText(playButton, 'Play');
    };

    $scope.updatePlayhead = function () {
        playhead.value = audioTrack.currentTime;
        var s = parseInt(audioTrack.currentTime % 60);
        var m = parseInt((audioTrack.currentTime / 60) % 60);
        s = (s >= 10) ? s : "0" + s;
        m = (m >= 10) ? m : "0" + m;
        playbacktime.innerHTML = m + ':' + s ;
    };

    //songPlayer.prototype = {
    //init: function() {var self = this,;self._create(self.audioPlayer, self.audioTrack);
    // self.playButton.addEventListener('click', self.player, false);
    // self.muteButton.addEventListener('click', self.muter, false);
    // self.volumeSlider.addEventListener('input', function(){self.audioTrack.volume = self.volumeSlider.value;}, false);
    // self.audioTrack.addEventListener('volumechange', self.volumizer, false);
    // self.audioTrack.addEventListener('ended', self.finish, false);
    // self.audioTrack.addEventListener('playing', function(){self.playhead.max = self.audioTrack.duration;}, false);
    // self.audioTrack.addEventListener('timeupdate', self.updatePlayhead, false);},
    //audioTrack.removeAttribute('controls');},

});
