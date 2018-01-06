import React from 'react';
import { Link } from 'react-router-dom';
import MenuText from './MenuText';

class MenuPathRight extends React.Component {
  render() {
    return(
      <path
        d={
          'm 335 200' + 
          'v -152' + 
          'a 7.5 7.5 0 0 1 50 0' + 
          'v 152' + 
          'l 215 150' + 
          'h -176'
        }
        fill="rgba(255,255,255,0.78)"
      />
    );
  }
}

class MenuRight extends React.Component {
  render() {
    return(
      <Link to={'future'}>
        <g className='SvgMenu'>
          <MenuPathRight />
          <MenuText
            words={this.props.words}
            targetPage='future'
            translationCoordinates={this.props.translationCoordinates}
          />
        </g>
      </Link>
    );
  }
}

module.exports = MenuRight;