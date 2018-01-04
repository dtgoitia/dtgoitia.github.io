import React from 'react';
import { Link } from 'react-router-dom';

class NotFound extends React.Component {
  render() {
    return (
      <div className='introHeader'>
        <div className='myName'>david
          <span className='mySurname'>torralba</span>
        </div>
        <div id={'monkey'}>
          <h1>404</h1>
          <p>It looks the page you are looking for doesn't exist</p>
          <Link to={'/'}>
            <h3>Click here to go to the home page</h3>
          </Link>
        </div>
      </div>
    );
  }
}

module.exports = NotFound;