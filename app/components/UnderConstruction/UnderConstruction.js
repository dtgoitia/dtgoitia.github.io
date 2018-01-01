import React from 'react';
import DevMonkey from './DevMonkey';

class UnderConstruction extends React.Component {
  render() {
    return (
      <div className='introHeader'>
        <div className='myName'>david
          <span className='mySurname'>torralba</span>
        </div>
        <div id={'monkey'}>
          <p>under active development!</p>
          <DevMonkey color='rgba(255,255,255,0.3)' />
        </div>
      </div>
    );
  }
}

module.exports = UnderConstruction;