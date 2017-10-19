import React from 'react';
import Intro from './Intro';
import Language from './Language';
import Past from './Past';
import Present from './Present';
import Future from './Future';
import Phone from './Phone';
const originalDb = require('./../../db.json');

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      page: 'intro',
      // page: 'past',
      // page: 'present',
      // page: 'future',
      language: 'English'
    };
    this.changePage = this.changePage.bind(this);
    this.changeLanguage = this.changeLanguage.bind(this);
  }

  changePage(pag) {
    console.log('changePage trigered. Arg:', pag);
    this.setState(() => ({page: pag}));
  }
  
  changeLanguage(lang) {
    this.setState(() => ({language: lang}));
  }

  render() {
    const currentPage = this.state.page;
    if (window.screen.width < 430) {
      return(
        <Phone
          originalDb={originalDb}
        />
      );
    } else {
      switch (this.state.page) {
      case 'intro':
        return (
          <div>
            <Intro
              originalDb={originalDb}
              st={this.state}
              changePage={this.changePage}
            />
            <Language
              originalDb={originalDb}
              st={this.state}
              changeLanguage={this.changeLanguage}
            />
          </div>
        );
      case 'past':
        return(
          <Past
            originalDb={originalDb}
            changePage={this.changePage}
          />
        );
      case 'present':
        return(
          <Present
            originalDb={originalDb}
            changePage={this.changePage}
          />
        );
      case 'future':
        return(
          <Future
            originalDb={originalDb}
            changePage={this.changePage}
          />
        );
      default:
        return(
          <div>
              Oops, this.state.page = {currentPage ? currentPage : 'null'}
          </div>
        );
      }
    }
  }
}
 
module.exports = App;