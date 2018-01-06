import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from 'react-router-dom';
import Intro from './Intro/Intro';
import Language from './Language';
import Past from './Past/Past';
import Present from './Present/Present';
import Future from './Future/Future';
import NotFound from './NotFound/NotFound';
import Phone from './Phone/Phone';
import UnderConstruction from './UnderConstruction/UnderConstruction';
const originalDb = require('./../../db.json');

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = { language: 'English' };
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
    if (window.screen.width < 430) {
      // return <Phone originalDb={originalDb} />;
      return <UnderConstruction />;
    } else {
      return(
        <Router>
          <div>
            <Switch>
              {/* Intro page without language */}
              <Route exact={true} path='/' render={() => (
                <Intro originalDb={originalDb} st={this.state} changePage={this.changePage}/>
              )} />
              {/* Intro page with language
              <Route exact={true} path='/' render={() => (
                <div>
                  <Intro originalDb={originalDb} st={this.state} changePage={this.changePage} />
                  <Language originalDb={originalDb} st={this.state} changeLanguage={this.changeLanguage} />
                </div>
              )} />
              */}
              <Route path='/past' render={() => (
                <Past originalDb={originalDb}/>
                // <UnderConstruction />
              )} />
              <Route path='/present' render={() => (
                <Present originalDb={originalDb}/>
              )} />
              <Route path='/future' render={() => (
                <Future originalDb={originalDb}/>
              )} />
              <Route render={() => <NotFound /> } />
            </Switch>
          </div>
        </Router>
      );
    }
  }
}
 
module.exports = App;