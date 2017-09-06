import React from 'react';
import NavBar from './NavBar';

// Individual horizontal bars
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

// Block containing all horizontal bars
const AcademiaBars = (props) => {
  return(
    <div className='academiaBars'>
      {props.bars.map((item,i) => {
        return <AcademiaBar length={item} fill={props.c} stroke='black' key={i}/>
      })}
    </div>
  );
}

// Tag with a circle shape: when the user clicks on the tag,
// it will show a card with the information
class AcademiaTag extends React.Component {
  constructor(props){
    super(props)
    this.state = { foldedTray: true }
    this.showHideTray = this.showHideTray.bind(this);
  }

  showHideTray(){
    this.setState({foldedTray: !this.state.foldedTray})
  }

  componendidmoun
  render() {
    return (
      <div
        className='academiaTagContainer'
        style={{top: this.props.position.y, left: this.props.position.x}}
      >
        <div
          className={this.state.foldedTray === true ? 'academiaTagClosed' : 'academiaTagClosed academiaTagOpen'}
          style={ {backgroundColor: this.props.color} }
          onClick={this.showHideTray.bind(null)}
        >
          <img src={this.props.data.symbolPath} />
          <h1>{this.props.data.title}</h1>
          <h2>{this.props.data.subtitle}</h2>
          <div
            className='academiaTagTray'
            style={{display: 'block'}}
          >
            <h3>{this.props.data.description}</h3>
            <p><i>Start date: </i>{this.props.data.start}</p>
            <p><i>End date: </i>{this.props.data.end === '' ? 'not yet' : this.props.data.end}</p>
          </div>
        </div>
      </div>
    );
  }
}

// Block containing the entry tag and its horizontal bars
class AcademiaEntry extends React.Component {
  render() {
    const c = this.props.color;
    return (
      <div className='academiaEntry'>
        <AcademiaTag data={this.props.data} color={c} position={this.props.position} />
        <AcademiaBars c={c} bars={this.props.bars}/>
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
          bars={[ 50, 30, 250, 40, 210, 90 ]}
          position={{x: 50, y: 20}}
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