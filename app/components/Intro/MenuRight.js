import React from 'react';
import MenuText from './MenuText';

class MenuPathRight extends React.Component {
  render() {
    return(
      <path
        onClick={this.props.changePage.bind(null, this.props.targetPage)}
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
      <g className='SvgMenu'>
        <MenuPathRight changePage={this.props.changePage} targetPage='future' />
        <MenuText
          words={this.props.words}
          changePage={this.props.changePage}
          targetPage='future'
          translationCoordinates={this.props.translationCoordinates}
        />
      </g>
    );
  }
}

module.exports = MenuRight;