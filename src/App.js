import React, {Component} from 'react';
import Search from './components/search';
import Details from './components/details';
import Player from './components/player';
import Progress from './components/progress';
import Footer from './components/footer/footer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Search/>
        <Details title={'Track title'}/>
        <Player/>
        <Progress position={'0.3'} elapsed={'00:00'} total={'0:40'}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
