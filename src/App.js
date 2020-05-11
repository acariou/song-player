import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import List from './Components/List';

import './App.css';
import 'typeface-roboto';

import campfireStory from './medias/songs/1.mp3';
import bootingUp from './medias/songs/2.mp3';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTrack: null,
      player: 'stopped'
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.state.selectedTrack !== prevState.selectedTrack) {
      let track;
      switch(this.state.selectedTrack) {
        case "Campfire Story":
          track = campfireStory
        break;
        case "Booting Up":
          track = bootingUp
        break;
        default:
        break;
      }
      if(track) {
        this.player.src = track;
        this.player.play()
        this.setState({ player: 'playing' })
      }
    }
    if (this.state.player !== prevState.player) {
      if (this.state.player === "paused") {
        this.player.pause();
      } else if (this.state.player === "stopped") {
        this.player.pause();
        this.player.currentTime = 0;
        this.setState({ selectedTrack: null });
      } else if (
        this.state.player === "playing" &&
        prevState.player === "paused"
      ) {
        this.player.play();
      }
    }
  }

  handleClick(trackTitle) {
    this.setState({ selectedTrack: trackTitle })
  }

  render() {
    const trackList = [
      {
        id: 1,
        title: "Campfire Story"
      },
      {
        id: 2,
        title: "Booting Up"
      }
    ];

    return (
      <div>
        <h1>Un simple lecteur audio</h1>
        <List
          list={trackList}
          handlerClick={this.handleClick} />
        <div>
          {this.state.player === "paused" && (
            <Button
              variant="contained"
              color="primary"
              onClick={() => this.setState({ player: "playing" })}>
              Play
            </Button>
            )
          }
          {this.state.player === "playing" && (
            <Button
              variant="contained"
              color="secondary"
              onClick={() => this.setState({ player: "paused" })}>
              Pause
            </Button>
          )}
          {this.state.player === "playing" || this.state.player === "paused" ? (
            <Button
              variant="contained"
              color="primary"
              onClick={() => this.setState({ player: "stopped" })}>
              Stop
            </Button>
          ) : (
              ""
            )}
        </div>
        <audio ref={ref => (this.player = ref)} />
      </div>
    );
  }
}

export default App;
