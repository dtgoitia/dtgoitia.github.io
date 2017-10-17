import React from 'react';
import NavBar from './NavBar';

const pastEntry = require('./../../utils/pastEntry.js');

class MultipleBar extends React.Component {
  render() {
    const data = this.props.data;
    if (data.length === 0) {
      // empty bar
      const totalLength = 0;
      const barThickness = this.props.barFormat.barThickness;
      const spacing = this.props.barFormat.barSpacing;
      return (
        <svg
          className={this.props.className}
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

      let dataSorted;
      if (this.props.stackDirection === 'right') {
        dataSorted = Object.assign([], data).reverse();
      } else if (this.props.stackDirection === 'left') {
        dataSorted = Object.assign([], data);
      }
      return (
        <svg
          className={this.props.className}
          viewBox={'0 0 '+ totalLength +' ' + barThickness}
          width={totalLength}
          height={barThickness + spacing} // Total SVG height = half-spacing + barThickness + half spacing
        >
          { 
            dataSorted.map( (barData,i) => {
              
              const subTotalLength = barData.bar;
              let bar = subTotalLength - barThickness; // Total length - (round corners' X displacement)
              if (bar < 0) {
                console.log('barData.bar is too small (see <MultipleBar/>) and its value it\'s been overwritten by default length which need to match with bar width (barThickness = ' + barThickness + ', set by user)\nbarData:', barData);
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

class MultipleBars extends React.Component {
  render() {
    return(
      <MultipleBar
        data={this.props.barData}
        barFormat={this.props.barFormat}
        className={this.props.className}
        stackDirection={this.props.stackDirection}
      />
    );
  }
}

// Tag with a circle shape: when the user clicks on the tag,
// it will unfold and show more information
class Tag extends React.Component {
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

    const className = this.props.className;
    const tagStyle = {
      bottom: ((endIndex * barHeight) - data.y) + 'px',
      zIndex: this.props.folded === true ? 1000 : 9000
    };
    className === 'academiaTag' ? tagStyle.left = data.x : tagStyle.right = data.x;
    
    return (
      <div className={className} style={tagStyle}>
        <div className={className + 'Container'}>
          <div
            className={
              this.props.folded === true
                ? className+'Closed'
                : className+'Closed '+className+'Open'
            }
            style={{backgroundColor: data.color}}
            onClick={this.showHideTray.bind(null)}
          >
            <img src={'./../img/' + data.img} />
            <h1>{data.title}</h1>
            <h2>{data.subtitle}</h2>
            <div
              className='tagTray'
              style={{display: 'block'}}
            >
              <h3>{data.description}</h3>
              <p><i>Start date: </i>{data.start}</p>
              <p><i>End date: </i>{data.end}</p>
            </div>
          </div>  
        </div>
      </div>
    );
  }
}

class Tags extends React.Component {
  render() {
    const h = this.props.h;
    return (
      <div className='tagsContainer' style={{position: 'absolute', bottom: (-h), height: h}} >
        {
          this.props.tagData.map((entry, i) => {
            const id = this.props.className + i;
            return(
              <Tag
                key={i}
                className={this.props.className}
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

class Bars extends React.Component {
  render() {
    return (
      <div className='bars'>
        {Object.values(this.props.barsData).reverse().map((barData,i) => {
          return(
            <MultipleBars key={i}
              barData={barData}
              barFormat={this.props.barFormat}
              className={this.props.className}
              stackDirection={this.props.stackDirection}              
            />
          );
        })}
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
        <div className='academia'>
          <Bars barsData={this.props.academiaBars}
            barFormat={barFormat}
            className='academiaBar'
            stackDirection='right'
          />
        </div>
        <div className='experience'>
          <Bars barsData={this.props.experienceBars}
            barFormat={barFormat}
            className='experienceBar'
            stackDirection='left'
          />
        </div>
        <div className='academia'>
          <Tags
            className='academiaTag'
            h={h}
            barFormat={barFormat}
            referenceDate={this.props.referenceDate}
            handleSelectedTag={this.props.handleSelectedTag}
            selectedTagId={this.props.selectedTagId}
            tagData={this.props.originalDb.academia}
          />
        </div>
        <div className='experience'>
          <Tags
            className='experienceTag'
            h={h}
            barFormat={barFormat}
            referenceDate={this.props.referenceDate}
            handleSelectedTag={this.props.handleSelectedTag}
            selectedTagId={this.props.selectedTagId}
            tagData={this.props.originalDb.experience}
          />
        </div>
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

class VerticalBar extends React.Component {
  render() {
    const totalHeight = this.props.totalHeight;
    const barThickness = 0.6 * this.props.barFormat.barSpacing;
    const spacing = this.props.barFormat.yearSpacing;
    const dString=
      'M' + spacing + ' ' + (0.5 * barThickness) +
      'a ' + 0.5 * barThickness + ' ' + 0.5 * barThickness + ' 0 0 1 ' + barThickness + ' 0' +
      'v' + (totalHeight - barThickness) +
      'a ' + 0.5 * barThickness + ' ' + 0.5 * barThickness + ' 0 0 1 ' + (-barThickness) + ' 0' +
      'v' + -(totalHeight - barThickness)
      ;
    console.log(spacing);
    return(
      <div className='verticalBar'>
        <svg
          viewBox={'0 0 '+ (spacing + barThickness + spacing) +' ' + totalHeight}
          width={spacing + barThickness + spacing}
          height={totalHeight}
        >
          <path d={dString}/>
        </svg>
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
    const barFormat = this.props.barFormat;
    const dbRange   = this.props.dbRange;
    const yearArray = pastEntry.getYearsArray(dbRange.latest.getFullYear(), pastEntry.yearRange(dbRange.earliest, dbRange.latest));
    const yearHeight = 6 * (barFormat.barThickness + barFormat.barSpacing) - barFormat.yearSpacing;
    return (
      <div className='timelineContainer'>
        <Years
          yearArray={yearArray}
          yearHeight={6 * (barFormat.barThickness + barFormat.barSpacing) - barFormat.yearSpacing}
          barFormat={barFormat}
        />
        <VerticalBar
          totalHeight={yearHeight * (yearArray.length)}
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
          originalDb={this.props.originalDb}
        />
      </div>
    );
  }
}

class Past extends React.Component {
  render () {
    const db = pastEntry.importDb(this.props.originalDb);
    const dbRange = pastEntry.getDbRange(db); 
    const dbBars = pastEntry.getDbBars(db);

    return (
      <div>
        <NavBar
          left={{label:'YOUR FUTURE', target:'future'}}
          right={{label:'MY PRESENT', target:'present'}}
          changePage={this.props.changePage}
        />
        <Timeline
          academiaBars={dbBars.academia}
          experienceBars={dbBars.experience}
          barFormat={{barThickness: 8, barSpacing: 8, yearSpacing: 2}}
          dbRange={dbRange}
          originalDb={this.props.originalDb}
        />
      </div>
    );
  }
}

module.exports = Past;
