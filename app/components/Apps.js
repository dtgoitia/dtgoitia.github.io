import React from 'react';
import Intro from './intro';
import Language from './language';

const db = {
  'languageBar': [
    ['Spanish', 'idioma'],
    ['English', 'language']
  ],
  introSubtitle: [
    ['Spanish', 'CREATIVO · DINÁMICO · COMPROMETIDO · CURIOSO'],
    ['English', 'CREATIVE · DYNAMIC · COMMITTED · INQUISITIVE']
  ],
}
 
class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      page: 'intro',
      language: 'English'
    }
    this.changePage = this.changePage.bind(this)
    this.changeLanguage = this.changeLanguage.bind(this)
  }

  changePage(pag) {
    this.setState(() => {
      return (
        {page: pag}
      )
    })
  }

  changeLanguage(lang) {
    // console.log('Language changed to ', lang, '!');
    this.setState(() => {
      return (
        {language: lang}
      )
    })
  }

  render() {
    return (
      <div>
        <Intro
          db={db}
          st={this.state}
          lang={this.state.language}
        />
        <Language
          db={db}
          st={this.state}
          lang={this.state.language}
          changeLanguage={this.changeLanguage}
        />
      </div>
    )
  }
}
 
module.exports = App;