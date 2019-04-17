import React from 'react';
import logo from './logo.png';
import soundcloud from './soundcloud.png';

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <p>Love from <img src={logo} className="logo" alt=""/>
          & <img src={soundcloud} className="soundcloud" alt=""/>
        </p>
      </div>
    )
  }

}

export default Footer
