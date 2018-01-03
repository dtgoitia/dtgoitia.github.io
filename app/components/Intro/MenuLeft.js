import React from 'react';
import { Link } from 'react-router-dom';
import MenuText from './MenuText';

class MenuPathLeft extends React.Component {
  render() {
    return(
      <path
        d="m 215 200 v -145 a 7.5 7.5 0 0 1 50 0 v 145 l -89 150 h -176"
        fill="rgba(150,150,150,0.78)"
      />
    );
  }
}

class MenuLeft extends React.Component {
  render() {
    return(
      <Link to={'past'}>
        <g className='SvgMenu'>
          <MenuPathLeft />
          <MenuText
            words={this.props.words}
            targetPage='past'
            translationCoordinates={this.props.translationCoordinates}
          />
        </g>
      </Link>
    );
  }
}

module.exports = MenuLeft;