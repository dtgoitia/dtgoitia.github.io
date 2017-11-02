import React from 'react';
import MenuText from './MenuText';

class MenuPathLeft extends React.Component {
  render() {
    return(
      <path
        onClick={this.props.changePage.bind(null, this.props.targetPage)}
        d="m 215 200 v -145 a 7.5 7.5 0 0 1 50 0 v 145 l -89 150 h -176"
        fill="rgba(150,150,150,0.78)"
      />
    );
  }
}

class MenuLeft extends React.Component {
  render() {
    return(
      <g className='SvgMenu'>
        <MenuPathLeft changePage={this.props.changePage} targetPage='past' />
        <MenuText
          words={this.props.words}
          changePage={this.props.changePage}
          targetPage='past'
          translationCoordinates={this.props.translationCoordinates}
        />
      </g>
    );
  }
}

module.exports = MenuLeft;