import React from 'react';
import Intro from './Intro';
import Language from './Language';
import Past from './Past';
import Present from './Present';
import Future from './Future';


const db = {
  languageBar: [
    ['Spanish', 'idioma'],
    ['English', 'language']
  ],
  introSubtitle: [
    ['Spanish', 'CREATIVO · DINÁMICO · COMPROMETIDO · CURIOSO'],
    ['English', 'CREATIVE · DYNAMIC · COMMITTED · INQUISITIVE']
  ],
  personalInfo: {
    name: 'David',
    surnames: 'Torralba Goitia',
    phone: '+44 (0)7598 178 122',
    email: 'david.torralba.goitia@gmail.com',
    location: [
      ['Spanish', 'Oxford, Reino Unido'],
      ['English', 'Oxford, United Kingdom']
    ]
  },
  socialMedia: {
    github:   'https://github.com/dtgoitia',
    linkedin: 'https://www.linkedin.com/in/dtgoitia',
    facebook: 'https://www.facebook.com/dtgoitia'
  },
  academia: [
    {
      h1: 'Secundary School',
      h2: 'J. M. Barandiaran (behekoa)',
      p:  '4 years during which I had every detail about my life\'s path perfectly defined and I was absolutelly sure about my future... (naive)',
      /**
       * Find out how to show dates on different languages, this way you can
       * avoid to create an array with dates in each language stored as strings.
       * The fact of storing them as dates allows you to sort them if needed.
       */ 
      t0: 'Sep 2002',
      t1: 'Jun 2006'
    },
    {
      h1: 'Science High School',
      h2: 'J. M. Barandiaran (goikoa)',
      p:  '2 years of non-obligatory education, in which I had to start defining my future studies, focusing on science areas.',
      t0: 'Sep 2006',
      t1: 'Jun 2008'
    }
  ]
};

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      // page: 'intro',
      page: 'past',
      language: 'English'
    };
    this.changePage = this.changePage.bind(this);
    this.changeLanguage = this.changeLanguage.bind(this);
  }

  changePage(pag) {
    this.setState(() => ({page: pag}));
  }
  
  changeLanguage(lang) {
    this.setState(() => ({language: lang}));
  }

  render() {
    const currentPage = this.state.page;
    switch (this.state.page) {
    case 'intro':
      return (
        <div>
          <Intro
            db={db}
            st={this.state}
            lang={this.state.language}
            changePage={this.changePage}
          />
          <Language
            db={db}
            st={this.state}
            lang={this.state.language}
            changeLanguage={this.changeLanguage}
          />
        </div>
      );
    case 'past':
      return(
        <Past
          changePage={this.changePage}
        />
      );
    case 'present':
      return(
        <Present
          changePage={this.changePage}
        />
      );
    case 'future':
      return(
        <Future
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
 
module.exports = App;