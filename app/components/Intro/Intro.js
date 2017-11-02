import React from 'react';
import SvgMenu from './SvgMenu';

class Intro extends React.Component {
  render() {
    return (
      <div>
        <div className='introHeader'>
          <div className='myName'>david
            <span className='mySurname'>torralba</span>
          </div>
          <div className='web2'>
            { this.props.originalDb.introSubtitle.filter( arr => arr[0] === this.props.st.language )[0][1]}
          </div>
        </div>
        <SvgMenu changePage={this.props.changePage} />
      </div>
    );
  }
}

module.exports = Intro;