import React from 'react';
import NavBar from './NavBar';

class Present extends React.Component {
  render () {
    return (
      <div>
        <NavBar
          left={{label:'MY PAST',target:'past'}}
          right={{label:'YOUR FUTURE',target:'future'}}
          changePage={this.props.changePage}
        />
        Hi! I am "Present.js"
      </div>
    )
  }
}

module.exports = Present;