import React from 'react';

class Intro extends React.Component {
  render() {
    return (
      <div>
        <div className='nombre'>
          david
          <span className='apellido'>torralba</span>
        </div>
        <div className='web2'>
          { this.props.db.introSubtitle.filter( arr => arr[0] === this.props.st.language )[0][1]}
        </div>
      </div>
    )
  }
}


module.exports = Intro;