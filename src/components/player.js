import React from 'react';
import ClassNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Player extends React.Component {

  render(){
    const playPauseClass = ClassNames({
      'play': this.props.playStatus === 'PLAYING' ? false : true,
      'pause': this.props.playStatus === 'PLAYING' ? true : false
    });

    return(
      <div className="player">
        <div className="player__backward">
          <button onClick={this.props.backward}>
            <FontAwesomeIcon icon="backward" />
          </button>
        </div>
        <div className="player__main">
          <button onClick={this.props.togglePlay}>
            <FontAwesomeIcon icon={playPauseClass} />
          </button>
          <button onClick={this.props.stop}>
            <FontAwesomeIcon icon="stop" />
          </button>
          <button onClick={this.props.random}>
            <FontAwesomeIcon icon="random" />
          </button>
        </div>
        <div className="player__forward">
          <button onClick={this.props.forward}>
            <FontAwesomeIcon icon="forward" />
          </button>
        </div>
      </div>
    )
  }
}

export default Player
