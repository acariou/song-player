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

//songPlayer.prototype = {
// self.volumeSlider.addEventListener('input', function(){self.audioTrack.volume = self.volumeSlider.value;}, false);
// self.audioTrack.addEventListener('volumechange', self.volumizer, false);
// self.audioTrack.addEventListener('ended', self.finish, false);
// self.audioTrack.addEventListener('playing', function(){self.playhead.max = self.audioTrack.duration;}, false);
// self.audioTrack.addEventListener('timeupdate', self.updatePlayhead, false);},

class App extends Component {
  /**
   * Gestion du bouton play/pause
   */
  /*player() {
    if ( audioTrack.paused ) {
      playButton.removeClass('fa-play').addClass('fa-pause');
      audioTrack.play();
    } else {
      playButton.removeClass('fa-pause').addClass('fa-play');
      audioTrack.pause();
    }
  };*/

  /**
   * Fonction de d'activation/desactivation du volume
   */
  /*muter() {
    if ( audioTrack.volume === 0 ) {
      audioTrack.volume = restorValue;
      volumeSlider.value = restorValue;
    } else {
      restorValue = volumeSlider.value;
      audioTrack.volume = 0;
      volumeSlider.value = 0;
    }
  };*/

  /*volumizer() {
    if ( audioTrack.volume === 0 ) {
      this._setText(muteButton, 'Unmute');
    } else {
      this._setText(muteButton, 'Mute');
    }
  };*/

  /*finish() {
    audioTrack.currentTime = 0;
    this._setText(playButton, 'Play');
  };*/

  /*_setText(el, text) {
      el.text(text);
  };*/

  /*updatePlayhead() {
     playhead.value = audioTrack.currentTime;
     let s = parseInt(audioTrack.currentTime % 60);
     let m = parseInt((audioTrack.currentTime / 60) % 60);
     s = (s >= 10) ? s : '0' + s;
     m = (m >= 10) ? m : '0' + m;
     playbacktime.innerHTML = m + ':' + s ;
  };*/

  render() {
    return (
      <div className="App">
        <section>
          <figure
            id="audioplayer"
            itemprop="track"
            itemscope
            itemtype="http://schema.org/MusicRecording">
            <figcaption>
              <div>Track <span itemprop="name">track.name</span></div>
              <div id="album">Album <span itemprop="inAlbum">track.album.name</span></div>
              <div id="artist">Artist <span itemprop="byArtist">track.artist.name</span></div>
              <div id="time">Time<span id="playbacktime">00:00</span></div>
            </figcaption>
            <meta itemprop="duration" content="PT2M29S" />
            <div id="fader">
              <input type="range" min="0" max="1" step="any" value="1" id="volumeSlider" orient="vertical" />
              <button type="button" className="fa fa-volume-up" onClick={this.muter} data-ctrl="btnVolume"></button>
            </div>
            <div id="playback">
              <button type="button" onClick={this.player} data-ctrl="play" className="fa fa-play"></button>
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
