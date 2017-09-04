import React from 'react';
import NavBar from './NavBar'

class AcademiaBar extends React.Component {
  render() {
    const l = this.props.length - 10; // Total length - (round corners' X displacement)
    const dString = 'm 5 0 h '+ l +' a 5 5 0 0 1 0 10 h -'+ l +' a 5 5 0 0 1 0 -10';
    return (
      <svg
        className='academiaBar'
        viewBox={'0 0 '+ this.props.length +' 10'}
        width={this.props.length}
        height='10'
      >
        <path
          d={dString}
          fill={this.props.fill ? this.props.fill : 'fill'}
          stroke={this.props.stroke ? this.props.stroke : 'black'}
        />
      </svg>
    );
  }
}

// Tag with a circle shape: when the user clicks on the tag,
// it will show a card with the information
class AcademiaTag extends React.Component {
  render() {
    return (
      <div
        className='academiaTag'
      >
        <img src={this.props.data.symbolPath} />
        <div className='academiaTagTray'>
          <h1>{this.props.data.title}</h1>
          <h2>{this.props.data.subtitle}</h2>
          <h3>This online course is the first step to get involved in project management world, focused to a later PMP, to achieve my goal: become a Project Manager.</h3>
          <p><i>Start date:</i> Nov 2014</p>
          <p><i>End date:</i> not yet</p>
        </div>
      </div>
    );
  }
}
// <div class="past_bola_der" style="width: 300px; bottom: 1189px; left: 116px;">
//   <div class="past_bola_der_panel"  style=" background: #92905d; ">
//     <img src="img/past_capm.svg">
//     <h1>Certified Associate in Project Management</h1>
//     <h2>Project Management Institute (PMI) & Learning People</h2>
//     <div class="past_bola_der_bandeja">
//       <h3>This online course is the first step to get involved in project management world, focused to a later PMP, to achieve my goal: become a Project Manager.</h3>
//       <p><i>Start date:</i> Nov 2014</p>
//       <p><i>End date:</i> not yet</p>
//     </div>
//   </div>
// </div>

class AcademiaEntry extends React.Component {
  render() {
    const c = this.props.color;
    return (
      <div>
        <AcademiaTag data={this.props.data} color={c} />
        <div className='academiaBars'>
          <AcademiaBar length='100' fill={c} stroke='black' />
          <AcademiaBar length='210' fill={c} stroke='black' />
          <AcademiaBar length='110' fill={c} stroke='black' />
          <AcademiaBar length='110' fill={c} stroke='black' />
        </div>
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
            end: '',
            symbolPath: './../img/past_capm.svg'
          }}
          color='#92905d'
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