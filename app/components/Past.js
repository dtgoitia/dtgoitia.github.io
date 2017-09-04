import React from 'react';
import NavBar from './NavBar'

class AcademiaBar extends React.Component {
  render() {
    const l = this.props.length - 10; // Total length - (round corners' X displacement)
    const dString = 'm 5 0 h '+ l +' a 5 5 0 0 1 0 10 h -'+ l +' a 5 5 0 0 1 0 -10';
    return (
      <svg viewBox={'0 0 '+ this.props.length +' 10'} width={this.props.length}>
        <path d={dString} fill={this.props.fill} stroke={this.props.stroke} />
      </svg>
    );
  }
}

class AcademiaEntry extends React.Component {
  render() {
    return (
      <div>
        AcademiaEntry
        <AcademiaBar length='100' fill='white' stroke='black' />
      </div>
    );
  }
}

class DesktopChronology extends React.Component {
  render() {
    return (
      <div>
        <AcademiaEntry
          data={{ title: 'Certified Associate in Project Management',
            subtitle: 'Project Management Institute (PMI) & Learning People',
            description: 'This online course is the first step to get involved in project management world, focused to a later PMP, to achieve my goal: become a Project Manager.',
            start: 'Nov 2014',
            end: ''
          }}
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