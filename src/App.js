import React, { Component } from 'react';
import './App.css';

const track = {
  name: 'lalala',
  artist: {
    name: 'toto'
  },
  album: {
    name: 'tralala'
  }
};
//    _setText = function (el, text) {
//        el.text(text);
//    };

// $scope.player = function() {if ( audioTrack.paused ) {playButton.removeClass('fa-play').addClass('fa-pause');audioTrack.play();} else {playButton.removeClass('fa-pause').addClass('fa-play');audioTrack.pause();}};
// Fonction de d'activation/desactivation du volume
// $scope.muter = function () {
//     if ( audioTrack.volume === 0 ) {
//         audioTrack.volume = restorValue;
//         volumeSlider.value = restorValue;
//     } else {
//         restorValue = volumeSlider.value;
//         audioTrack.volume = 0;
//         volumeSlider.value = 0;
//     }
// };

// $scope.volumizer = function () {
//     if ( audioTrack.volume === 0 ) {
//         _setText(muteButton, 'Unmute');
//     } else {
//         _setText(muteButton, 'Mute');
//     }
// };

// $scope.finish = function () {
//     audioTrack.currentTime = 0;
//     _setText(playButton, 'Play');
// };

// $scope.updatePlayhead = function () {
//     playhead.value = audioTrack.currentTime;
//     var s = parseInt(audioTrack.currentTime % 60);
//     var m = parseInt((audioTrack.currentTime / 60) % 60);
//     s = (s >= 10) ? s : '0' + s;
//     m = (m >= 10) ? m : '0' + m;
//     playbacktime.innerHTML = m + ':' + s ;
// };

//songPlayer.prototype = {
// self.volumeSlider.addEventListener('input', function(){self.audioTrack.volume = self.volumeSlider.value;}, false);
// self.audioTrack.addEventListener('volumechange', self.volumizer, false);
// self.audioTrack.addEventListener('ended', self.finish, false);
// self.audioTrack.addEventListener('playing', function(){self.playhead.max = self.audioTrack.duration;}, false);
// self.audioTrack.addEventListener('timeupdate', self.updatePlayhead, false);},
//audioTrack.removeAttribute('controls');},

class App extends Component {

  render() {
    return (
      <div className="App">
        <section>
            <figure id="audioplayer" itemprop="track" itemscope itemtype="http://schema.org/MusicRecording">
                <figcaption>
                    <div>Track <span itemprop="name">track.name</span></div>
                    <div id="album">Album <span itemprop="inAlbum">track.album.name</span></div>
                    <div id="artist">Artist <span itemprop="byArtist">track.artist.name</span></div>
                    <div id="time">Time<span id="playbacktime">00:00</span></div>
                </figcaption>
                <meta itemprop="duration" content="PT2M29S" />
                <div id="fader">
                    <input type="range" min="0" max="1" step="any" value="1" id="volumeSlider" orient="vertical" />
                    <button type="button" class="fa fa-volume-up" onClick="muter()" data-ctrl="btnVolume"></button>
                </div>
                <div id="playback">
                    <button type="button" onClick="player()" data-ctrl="play" class="fa fa-play"></button>
                    <progress min="0" max="100" value="0" id="playhead"></progress>
                </div>
                <audio src="medias/01-rainbowblues.mp3" controls id="audiotrack" preload="auto" itemprop="audio"></audio>
            </figure>
        </section>
      </div>
    );
  }
}

export default App;
