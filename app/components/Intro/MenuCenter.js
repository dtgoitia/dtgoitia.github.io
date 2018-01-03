import React from 'react';
import { Link } from 'react-router-dom';
import MenuText from './MenuText';

class MenuPathCenter extends React.Component {
  render() {
    return(
      <path
        d={ 
          'm 275 200' +
          'v -170' +
          'a 7.5 7.5 0 0 1 50 0' +
          'v 170' +
          'l 63 150' +
          'h -176'
        }
        fill="rgba(206,206,206,0.78)"
      />
    );
  }
}

class MenuCenter extends React.Component {
  render() {
    return(
      <Link to={'present'}>
        <g className='SvgMenu'>
          <MenuPathCenter />
          <MenuText
            words={this.props.words}
            changePage={this.props.changePage}
            targetPage='present'
            translationCoordinates={this.props.translationCoordinates}
          />
        </g>
      </Link>
    );
  }
}

module.exports = MenuCenter;