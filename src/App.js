import React from 'react';
import Search from './Components/Search';
import Details from './Components/Details';
import Player from './Components/Player';
import Progress from './Components/Progress';
import Footer from './Components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Search tracks={['']}/>
      <Details title={'Track title'}/>
      <Player/>
      <Progress position={'0.3'} elapsed={'00:00'} total={'0:40'}/>
      <Footer/>
    </div>
  );
}

export default App;
