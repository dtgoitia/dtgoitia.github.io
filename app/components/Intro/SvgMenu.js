import React from 'react';
import MenuLeft from './MenuLeft';
import MenuCenter from './MenuCenter';
import MenuRight from './MenuRight';

class SvgMenu extends React.Component {
  render(){
    return(
      <div className='menu'>
        <svg width="600" height="350">
          <MenuLeft words={['my', 'past']}      changePage={this.props.changePage}
            translationCoordinates={'245 50'}
          />
          <MenuCenter words={['my', 'present']}   changePage={this.props.changePage}
            translationCoordinates={'306 25'}
          />
          <MenuRight words={['your', 'future']}  changePage={this.props.changePage}
            translationCoordinates={'367 40'}
          />
        </svg>
      </div>
    );
  }
}

module.exports = SvgMenu;