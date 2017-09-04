import React from 'react';
import NavBar from './NavBar'

class AcademiaEntry extends React.Component {
  render() {
    return (
      <div>AcademiaEntry</div>
    );
  }
}
class DesktopChronology extends React.Component {
  render() {
    return (
      <div>
        <AcademiaEntry
          title='Certified Associate in Project Management'
          subtitle='Project Management Institute (PMI) & Learning People'
        />
      </div>
    );
  }
}

class Past extends React.Component {
  render () {
    return (
      <div>
        <NavBar
          left={{label:'YOUR FUTURE',target:'future'}}
          right={{label:'MY PRESENT',target:'present'}}
          changePage={this.props.changePage}
        />
        <DesktopChronology />
      </div>
    )
  }
}

module.exports = Past;