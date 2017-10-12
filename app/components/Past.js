import React from 'react';
import NavBar from './NavBar';

const pastEntry = require('./../../utils/pastEntry.js');
const originalDb = require('./../../pastData.json');

class MultipleAcademiaBar extends React.Component {
  render() {
    const data = this.props.data;
    if (data.length === 0) {
      // empty bar
      const totalLength = 0;
      const barThickness = this.props.barFormat.barThickness;
      const spacing = this.props.barFormat.barSpacing;
      return (
        <svg
          className='academiaBar'
          viewBox={'0 0 '+ totalLength +' ' + barThickness}
          width={totalLength}
          height={barThickness + spacing}
        >
          <path></path>
        </svg>
      );
    } else {
      const totalLength = data.map( barData => barData.bar)
        .reduce((accumulatedLength, currentLength) => accumulatedLength + currentLength);
      const barThickness = this.props.barFormat.barThickness;
      const spacing = this.props.barFormat.barSpacing;
      let initialX = 0.5 * barThickness;
      return (
        <svg
          className='academiaBar'
          viewBox={'0 0 '+ totalLength +' ' + barThickness}
          width={totalLength}
          height={barThickness + spacing} // Total SVG height = half-spacing + barThickness + half spacing
        >
          { 
            this.props.data.map( (barData,i) => {
              const subTotalLength = barData.bar;
              let bar = subTotalLength - barThickness; // Total length - (round corners' X displacement)
              if (bar < 0) {
                console.log('barData.bar is too small (see <MultipleAcademiaBar/>) and its value it\'s been overwritten by default length which need to match with bar width (barThickness = ' + barThickness + ', set by user)\nbarData:', barData);
                bar = 0;
              }
              const dString =
                'm ' + initialX + ' 0' +
                'h '+ bar +
                'a ' + 0.5 * barThickness + ' ' + 0.5 * barThickness + ' 0 0 1 0 ' + barThickness +
                'h -'+ bar +
                'a ' + 0.5 * barThickness + ' ' + 0.5 * barThickness + ' 0 0 1 0 ' + (-1 * barThickness);
              initialX += subTotalLength;
              return(
                <path
                  d={dString}
                  fill={barData.color ? barData.color : 'fill'}
                  key={i}
                />
              );
            })
          }
        </svg>
      );
    }
  }
}

class MultipleAcademiaBars extends React.Component {
  render() {
    return <MultipleAcademiaBar data={this.props.barData} barFormat={this.props.barFormat} />;
  }
}

// Tag with a circle shape: when the user clicks on the tag,
// it will unfold and show more information
class AcademiaTag extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      foldedTray: this.props.folded
    };
    this.showHideTray = this.showHideTray.bind(this);
  }

  showHideTray(){
    this.setState({foldedTray: !this.state.foldedTray});
    if (this.state.foldedTray === false) {
      this.props.handleSelectedTag('');
    } else {
      this.props.handleSelectedTag(this.props.id);
    }
  }

  render() {
    const data = this.props.data;
    const endDate = (data.end === '' | data.end === 'not yet') ? new Date() : new Date(data.end + '-01');
    const endIndex = pastEntry.getRelativeIndex(this.props.referenceDate, endDate);
    const barHeight = this.props.barFormat.barThickness + this.props.barFormat.barSpacing;

    return (
      <div
        className='academiaTagContainer'
        style={{
          bottom: ((endIndex * barHeight) - data.y) + 'px',
          left: data.x
        }}
      >
        <div
          className={this.props.folded === true ? 'academiaTagClosed' : 'academiaTagClosed academiaTagOpen'}
          style={ {backgroundColor: data.color} }
          onClick={this.showHideTray.bind(null)}
        >
          <img src={'./../img/' + data.img} />
          <h1>{data.title}</h1>
          <h2>{data.subtitle}</h2>
          <div
            className='academiaTagTray'
            style={{display: 'block'}}
          >
            <h3>{data.description}</h3>
            <p><i>Start date: </i>{data.start}</p>
            <p><i>End date: </i>{data.end}</p>
          </div>
        </div>
      </div>
    );
  }
}

class AcademiaTags extends React.Component {
  render() {
    const h = this.props.h;
    return (
      <div
        id='academiaTags'
        className='academiaTags'
        style={{position: 'absolute', bottom: (-h), height: h}}
      >
        {
          originalDb.academia.map((entry, i) => {
            const id = 'academiaTag' + i;
            return(
              <AcademiaTag
                key={i}
                id={id}
                data={entry}
                referenceDate={this.props.referenceDate}
                barFormat={this.props.barFormat}
                handleSelectedTag={this.props.handleSelectedTag}
                selectedTagId={this.props.selectedTagId}
                folded={this.props.selectedTagId === id ? false : true}
              />
            );
          })
        }
      </div>
    );
  }
}

class AcademiaBars extends React.Component {
  render() {
    return (
      <div className='academiaBars'>
        {Object.values(this.props.academiaBars).reverse().map((barData,i) => {
          return <MultipleAcademiaBars barData={barData} barFormat={this.props.barFormat} key={i} />;
        })}
      </div>
    );
  }
}

class Academia extends React.Component {
  render() {
    const barFormat = this.props.barFormat;
    return (
      <div className='academia'>
        <AcademiaBars
          academiaBars={this.props.academiaBars}
          barFormat={barFormat}
        />
        <AcademiaTags
          h={this.props.h}
          barFormat={barFormat}
          referenceDate={this.props.referenceDate}
          handleSelectedTag={this.props.handleSelectedTag}
          selectedTagId={this.props.selectedTagId}
        />
      </div>
    );
  }
}

class Experience extends React.Component {
  render() {
    return (
      <div className='experience'>
        Experience bars TO-DO
      </div>
    );
  }
}

class AcademiaAndExperience extends React.Component {
  render() {
    const barFormat = this.props.barFormat;
    
    // Get academiaTags div height from number of years ploted and bar size
    const h = (this.props.yearArray.length + 0) * 6 * (barFormat.barThickness + barFormat.barSpacing);
    return (
      <div className='timeline'>
        <Experience />
        <Academia
          academiaBars={this.props.academiaBars}
          barFormat={barFormat}
          h={h}
          referenceDate={this.props.referenceDate}
          handleSelectedTag={this.props.handleSelectedTag}
          selectedTagId={this.props.selectedTagId}
        />
      </div>
    );
  }
}

class Year extends React.Component {
  render() {
    return (
      <div
        className='year'
        style={{
          height: this.props.yearHeight + 'px',
          margin: this.props.barFormat.yearSpacing + 'px 0px '
        }}
      >
        <div className='yearTag'>{this.props.year}</div>
      </div>
    );
  }
}

class Years extends React.Component {
  render() {
    return (
      <div className='years'>
        {
          this.props.yearArray.map( year => {
            return (
              <Year
                key={year}
                year={year}
                yearHeight={this.props.yearHeight}
                barFormat={this.props.barFormat}
              />
            );
          })
        }
      </div>
    );
  }
}

class Timeline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTagId: ''
    };
    this.handleSelectedTag = this.handleSelectedTag.bind(this);
  }

  handleSelectedTag(tagId) {
    this.setState({
      selectedTagId: tagId
    });
  }

  render() {
    console.log('this.state.selectedTagId: ' + this.state.selectedTagId);
    const barFormat = this.props.barFormat;
    const dbRange   = this.props.dbRange;
    const yearArray = pastEntry.getYearsArray(dbRange.latest.getFullYear(), pastEntry.yearRange(dbRange.earliest, dbRange.latest));
    return (
      <div className='timelineContainer'>
        <Years
          yearArray={yearArray}
          yearHeight={6 * (barFormat.barThickness + barFormat.barSpacing) - barFormat.yearSpacing}
          barFormat={barFormat}
        />
        <AcademiaAndExperience
          yearArray={yearArray}
          academiaBars={this.props.academiaBars}
          experienceBars={this.props.experienceBars}
          referenceDate={dbRange.earliest}
          barFormat={barFormat}
          handleSelectedTag={this.handleSelectedTag}
          selectedTagId={this.state.selectedTagId}
        />
      </div>
    );
  }
}

class Past extends React.Component {
  render () {
    const db = pastEntry.importDb(originalDb);  // Convert to Date all string-dates in db
    const dbRange = pastEntry.getDbRange(db);   // Get db range
    const dbBars = pastEntry.getDbBars(db);     // Get database bar list sorted and grouped by index

    return (
      <div>
        <NavBar
          left={{label:'YOUR FUTURE',target:'future'}}
          right={{label:'MY PRESENT',target:'present'}}
          changePage={this.props.changePage}
        />
        <Timeline
          academiaBars={dbBars.academia}
          experienceBars={dbBars.experience}
          barFormat={{barThickness: 8, barSpacing: 8, yearSpacing: 2}}
          dbRange={dbRange}
        />
      </div>
    );
  }
}

module.exports = Past;
