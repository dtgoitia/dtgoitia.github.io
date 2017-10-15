import React from 'react';

class Language extends React.Component {
  render(){
    return (
      <div className='language-container'>
        <div className='language'>
          <h1>
            { this.props.originalDb.languageBar.filter( arr => arr[0] === this.props.st.language )[0][1]}
          </h1>
          <h2>
            <span
              onClick={this.props.changeLanguage.bind(null,'English')}
            >EN </span>
            |
            <span
              onClick={this.props.changeLanguage.bind(null,'Spanish')}
            > ES</span>
          </h2>
        </div>
      </div>
    );
  }
}

module.exports = Language;