'use strict';

/**
 * @ngdoc function
 * @name angularsrssApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularsrssApp
 */
app.controller('MainCtrl', ['$scope', function ($scope) {

    $scope.track = {
        name: 'lalala',
        artist: {
            name: 'toto'
        },
        album: {
            name: 'tralala'
        }
    };
    var audioPlayer = document.getElementById('audioplayer'),
        audioTrack = document.getElementById('audiotrack'),
        playButton = angular.element('[data-ctrl="play"]'),
        fader = document.getElementById('fader'),
        playback = document.getElementById('playback'),
        playbackTime = document.getElementById('playbacktime'),
        playhead = document.getElementById('playhead'),
        volumeSlider = document.getElementById('volumeSlider'),
        duration = audioTrack.duration,
        isMute = false,
        restorValue,

        _setText = function (el, text) {
            el.text(text);
        };

    $scope.player = function() {
        if ( audioTrack.paused ) {
            playButton.removeClass('fa-play').addClass('fa-pause');
            audioTrack.play();
        } else {
            playButton.removeClass('fa-pause').addClass('fa-play');
            audioTrack.pause();
        }
    };
    // Fonction de d'activation/desactivation du volume
    $scope.muter = function () {
        if ( audioTrack.volume === 0 ) {
            audioTrack.volume = restorValue;
            volumeSlider.value = restorValue;
        } else {
            restorValue = volumeSlider.value;
            audioTrack.volume = 0;
            volumeSlider.value = 0;
        }
    };

    $scope.volumizer = function () {
        if ( audioTrack.volume === 0 ) {
            _setText(muteButton, 'Unmute');
        } else {
            _setText(muteButton, 'Mute');
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
        s = (s >= 10) ? s : '0' + s;
        m = (m >= 10) ? m : '0' + m;
        playbacktime.innerHTML = m + ':' + s ;
    };

    //songPlayer.prototype = {
    // self.volumeSlider.addEventListener('input', function(){self.audioTrack.volume = self.volumeSlider.value;}, false);
    // self.audioTrack.addEventListener('volumechange', self.volumizer, false);
    // self.audioTrack.addEventListener('ended', self.finish, false);
    // self.audioTrack.addEventListener('playing', function(){self.playhead.max = self.audioTrack.duration;}, false);
    // self.audioTrack.addEventListener('timeupdate', self.updatePlayhead, false);},
    //audioTrack.removeAttribute('controls');},

}]);
