// @flow
import React, { Component } from 'react';
import data from '../constants/tracks.json';

type Props = {};

export default class TrackList extends Component<Props> {
  props: Props;

  constructor(props) {
    super(props);
    this.state = { tracks: [] };
    this.renderListItem = this.renderListItem.bind(this);
  }

  componentDidUpdate() {
    if (this.activeTrack) {
      let topOfTrackList = this.trackList.scrollTop;
      let bottomOfTrackList =
        this.trackList.scrollTop + this.trackList.clientHeight;
      let positionOfSelected = this.activeTrack.offsetTop;
      if (
        topOfTrackList > positionOfSelected ||
        bottomOfTrackList < positionOfSelected
      ) {
        this.trackList.scrollTop = positionOfSelected;
      }
    }
  }

  componentDidMount() {
    //fetch data for a track here (i.e. from Spotify or Soundcloud)s
    this.setState({ tracks: data.tracks });
  }

  renderListItem(track, i) {
    let trackClass =
      this.props.currentTrackIndex === track.id ? 'selected' : '';
    return (
      <li
        key={track.id}
        className={trackClass}
        ref={cur => {
          if (this.props.currentTrackIndex === track.id) {
            this.activeTrack = cur;
          }
        }}
        onClick={() => {
          this.props.selectTrackNumber(track.id);
        }}
      >
        <div className="number">{track.id}</div>
        <div className="title">{track.title}</div>
        <div className="duration">{track.duration}</div>
      </li>
    );
  }

  render() {
    let tracks = this.state.tracks.map(this.renderListItem);

    return (
      <ul className="TrackList" ref={input => this.trackList = input}>
        {tracks}
      </ul>
    );
  }
}
