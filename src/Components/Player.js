import React from 'react';
import ClassNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class Player extends React.Component {

  componentDidMount() {
    this.audio = new Audio('./medias/songs/1.mp3');
    this.audio.load();
    this.playAudio();
  }

  playAudio() {
    const audioPromise = this.audio.play();
    if (audioPromise !== undefined) {
      audioPromise
        .then(_ => {
          console.log('OK');
          // autoplay started
        })
        .catch(err => {
          // catch dom exception
          console.info(err)
        })
    }
  }

  render() {
    const playPauseClass = ClassNames({
      'play': this.props.playStatus === 'PLAYING' ? false : true,
      'pause': this.props.playStatus === 'PLAYING' ? true : false
    });

    return (
      <div className="player">

        <div className="player__backward">
          <button onClick={this.props.backward}>
            <FontAwesomeIcon icon="backward"/>
          </button>
        </div>
        <div className="player__main">
          <button onClick={this.props.togglePlay}>
            <FontAwesomeIcon icon={playPauseClass}/>
          </button>
          <button onClick={this.props.stop}>
            <FontAwesomeIcon icon="stop"/>
          </button>
          <button onClick={this.props.random}>
            <FontAwesomeIcon icon="random"/>
          </button>
        </div>
        <div className="player__forward">
          <button onClick={this.props.forward}>
            <FontAwesomeIcon icon="forward"/>
          </button>
        </div>
      </div>
    )
  }
}

export default Player
