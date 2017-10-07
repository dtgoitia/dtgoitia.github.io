import React from 'react';
import NavBar from './NavBar';

class Future extends React.Component {
  render () {
    return (
      <div>
        <NavBar
          left={{label:'MY PRESENT',target:'present'}}
          right={{label:'MY PAST',target:'past'}}
          changePage={this.props.changePage}
        />
        Hi! I am "Future.js"
      </div>
    );
  }
}

module.exports = Future;