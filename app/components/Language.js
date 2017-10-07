import React from 'react';

class Language extends React.Component {
  render(){
    return (
      <div className='idioma0'>
        <div className='idioma1'>
          <h1>
            { this.props.db.languageBar.filter( arr => arr[0] === this.props.st.language )[0][1]}
          </h1>
          <h2>
            <span
              onClick={this.props.changeLanguage.bind(null,'English')}
            >EN</span>
            |
            <span
              onClick={this.props.changeLanguage.bind(null,'Spanish')}
            >ES</span>
          </h2>
        </div>
      </div>
    );
  }
}

module.exports = Language;