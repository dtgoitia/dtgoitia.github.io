import React from 'react';
import NavBar from './NavBar';
import pastData from './../../pastData.json';

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
        style={{top: this.props.data.y, left: this.props.data.x}}
      >
        <div
          className={this.state.foldedTray === true ? 'academiaTagClosed' : 'academiaTagClosed academiaTagOpen'}
          style={ {backgroundColor: this.props.data.color} }
          onClick={this.showHideTray.bind(null)}
        >
          <img src={'./../img/' + this.props.data.img} />
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
    const d = this.props.data;
    return (
      <div className='academiaEntry'>
        <AcademiaTag data={d} />
        <AcademiaBars c={d.color} bars={d.bars}/>
      </div>
    );
  }
}

class DesktopChronology extends React.Component {
  render() {
    return(
      <div>
        {pastData.academia.map((academiaEntry, i) => {
          return <AcademiaEntry data={academiaEntry} key={i}/>
        })}
      </div>
    )
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