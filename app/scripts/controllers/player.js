'use strict';

/**
 * @ngdoc function
 * @name songPlayerApp.controller:PlayerCtrl
 * @description
 * # PlayerCtrl
 * Controller of the songPlayerApp
 */
app.controller('playerCtrl', function ($scope) {
        $scope.track = 'toto';

        //function songPlayer(contener,el) {
            //this.contener = contener;
            //this.el = el;
            //this.audioPlayer = document.getElementById(this.contener);
            //this.audioTrack = document.getElementById(this.el);
            //this.fader = document.getElementById("fader");
            //this.playback = document.getElementById("playback");
            //this.playbackTime = document.getElementById("playbacktime");
            //this.playhead = document.getElementById('playhead');
            //var self = this;
            //this.player = function() {if ( self.audioTrack.paused ) {self._setText(self.playButton, 'Pause');self.audioTrack.play();} else {self._setText(self.playButton, 'Play');self.audioTrack.pause();}};
            //this.muter = function () {if ( self.audioTrack.volume == 0 ) {self.audioTrack.volume = restorValue;self.volumeSlider.value = restorValue;} else {self.audioTrack.volume = 0;restorValue = self.volumeSlider.value;self.volumeSlider.value = 0;}};
            //this.volumizer = function () {if ( self.audioTrack.volume === 0 ) {self._setText(self.muteButton, 'Unmute');} else {self._setText(self.muteButton, 'Mute');}};
            //this.finish = function () {self.audioTrack.currentTime = 0;self._setText(self.playButton, 'Play');};
            //this.updatePlayhead = function () {self.playhead.value = self.audioTrack.currentTime;var s = parseInt(self.audioTrack.currentTime % 60);var m = parseInt((self.audioTrack.currentTime / 60) % 60);s = (s >= 10) ? s : "0" + s;m = (m >= 10) ? m : "0" + m;self.playbacktime.innerHTML = m + ':' + s ;}
        //}
        //songPlayer.prototype = {
            //init: function() {var self = this,duration = self.audioTrack.duration;self._create(self.audioPlayer, self.audioTrack);self.playButton.addEventListener('click', self.player, false);self.muteButton.addEventListener('click', self.muter, false);self.volumeSlider.addEventListener('input', function(){self.audioTrack.volume = self.volumeSlider.value;}, false);self.audioTrack.addEventListener('volumechange', self.volumizer, false);self.audioTrack.addEventListener('ended', self.finish, false);self.audioTrack.addEventListener('playing', function(){self.playhead.max = self.audioTrack.duration;}, false);self.audioTrack.addEventListener('timeupdate', self.updatePlayhead, false);},
            //_create: function(audioPlayer, audioTrack) {var self = this;self._setAttributes(self.playButton, {'type': 'button', "class": "ss-icon"});self._setAttributes(self.muteButton, {'type': 'button', "class": "ss-icon"});self._setAttributes(self.volumeSlider, {"type": "range","min": "0","max": "1","step": "any","value": "1","orient": "vertical","id": "volumeSlider"});self._setAttributes(self.playhead, { "min": "0", "max": "100", "value": "0", "id": "playhead" });self._setText(self.playButton, "Play");self._setText(self.muteButton, "Mute");self.muteButton.style.display = "block";self.muteButton.style.margin = "0 auto";audioPlayer.appendChild(self.playButton);audioPlayer.appendChild(self.muteButton);audioPlayer.appendChild(self.volumeSlider);self.fader.appendChild(self.volumeSlider);self.fader.appendChild(self.muteButton);self.playback.appendChild(self.playButton);self.playback.appendChild(self.playhead);audioTrack.removeAttribute('controls');},
            //_setText: function (el, text) {el.innerHTML = text;},
            //_setAttributes: function (el, attrs) {for (var key in attrs) {el.setAttribute(key, attrs[key]);}}
        //};
        //var MyPlayer = new songPlayer('audioplayer','audiotrack');
        //MyPlayer.init();
    });