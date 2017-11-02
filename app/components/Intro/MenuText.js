import React from 'react';

class MenuText extends React.Component {
  render() {
    return(
      <text
        className='verticalText'
        transform={'translate(' + this.props.translationCoordinates + ') rotate(-90 0,0)'}
        textAnchor='end'
        onClick={this.props.changePage.bind(null, this.props.targetPage)}
      >
        <tspan className='verticalTextHidden'>{this.props.words[0]}</tspan> {this.props.words[1]}
      </text>
    );
  }
}

module.exports = MenuText;