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

class MultipleAcademiaBar extends React.Component {
  render() {
    const totalLength = this.props.data.map( barData => {
      return barData.l;
    }).reduce((accumulatedLength, currentLength) => {
      return accumulatedLength + currentLength;
    });
    const barWidth = this.props.barFormat.barWidth;
    const spacing = this.props.barFormat.barSpacing;
    let initialX = 0.5 * barWidth;
    let lastLength = 0;
    return (
      <svg
        className='academiaBar'
        viewBox={'0 0 '+ totalLength +' ' + barWidth}
        width={totalLength}
        height={barWidth + spacing}
      >
        { 
          this.props.data.map( (barData,i) => {
            const subTotalLength = barData.l;
            const l = subTotalLength - barWidth; // Total length - (round corners' X displacement)
            const dString =
              'm ' + initialX + ' 0' +
              'h '+ l +
              'a ' + 0.5 * barWidth + ' ' + 0.5 * barWidth + ' 0 0 1 0 ' + barWidth +
              'h -'+ l +
              'a ' + 0.5 * barWidth + ' ' + 0.5 * barWidth + ' 0 0 1 0 ' + (-1 * barWidth);
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

class MultipleAcademiaBars extends React.Component {
  render() {
    const data = this.props.barData;
    if ( data.length > 0 ) {
      return <MultipleAcademiaBar data={data} barFormat={this.props.barFormat} />
    } else {
      return <div>MultipleAcademiaBars this.props.barData is zero!</div>
    }
  }
}

// Block containing all horizontal bars
const AcademiaBars = (props) => {
  return(
    <div className='academiaBars'>
      {props.data.bars.map((item,i) => {
        return <AcademiaBar length={item} fill={props.data.color} stroke='black' key={i}/>
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
        <AcademiaBars data={d} />
      </div>
    );
  }
}

class DesktopChronology extends React.Component {

  getMonthsInBetween(earlyDate, lateDate){
    // Get number of months in between
    let months = (lateDate.getFullYear() - earlyDate.getFullYear()) * 12;
    months -= earlyDate.getMonth() + 1;
    months += lateDate.getMonth();
    return months <= 0 ? 0 : months;
  }
  getDateRange(academiaData){
    // Get academiaData date boundary information:
    //  - earliest date
    //  - latest date
    //  - number of months in between

    // Get earliest start date in academiaData
    const start = academiaData.map(entry => {
      const date = new Date(entry.start);
      return date
    }).reduce((earliestDateFound, currentDate) => {
      if (earliestDateFound < currentDate) {
        return earliestDateFound
      } else {
        return currentDate
      }
    })
    
    // Get latest end date in academiaData (today)
    const end = new Date();
    
    // Get number of months in between
    const totalMonths = this.getMonthsInBetween(start, end);
    
    console.log('months:', totalMonths);
    console.log('start:', start.getFullYear(), start.getMonth()+1 );
    console.log('end:', end.getFullYear(), end.getMonth()+1 );
    // Return all data
    // return {'start': start, 'end': end, 'months': months}

    // example bar array with multiple bars per line
    let barArray = [
      [ { 'l': 200, 'color': "#fa70ae" }, { 'l': 200, 'color': "#fff" }, { 'l': 80, 'color': "#999" } ],
      [ { 'l': 80, 'color': "#aaa" } ],
      [ { 'l': 60, 'color': "#aaa" } ],
      [ { 'l': 100, 'color': "#aaa" } ],
      [ { 'l': 100, 'color': "#aaa" } ],
      [ { 'l': 100, 'color': "#aaa" } ],
      [ { 'l': 100, 'color': "#aaa" } ],
    ];
    
    // example bar array without multiple bars per line
    // TODO: join bars according to their date
    barArray = academiaData.map( academiaEntry => {
      return academiaEntry.bars.map( barLength => {
        return [{ 'l': barLength, 'color': academiaEntry.color }]
      });
    }).reduce( (previous, academiaEntry) => {
      return previous.concat(academiaEntry)
    });
    console.log('barArray:', barArray);

    // 1. Take the absolute index of the start date of the event (remember to join months in pairs)
    // 2. Map all bars and each one gets an index 2 units bigger than the previous one (index = prevIndex + 2)
    // 3. Return an object containing the absolute index of each bar, and its properties (length and color)

    // // test
    // const test = academiaData.map( academiaEntry => {
    //   // If the activity doesn't have end date, asign today's date
    //   let endDate;
    //   academiaEntry.end === '' ? endDate = new Date() : endDate = new Date(academiaEntry.end);
    //   const startDate = new Date (academiaEntry.start);

    //   // Get amount of months covered by the entry
    //   const entryMonths = this.getMonthsInBetween(startDate, endDate);
      
    //   // Add 'months' member to academiaEntry
    //   let entry = academiaEntry;
    //   entry.months = entryMonths;

    //   // Run through every bar
    //   const monthsPerBar = entry.bars.length / entry.months;
    //   console.log('monthsPerBar:', monthsPerBar);

    //   let currentMonth = startDat
    //   const kk = entry.bars.filter((barLength,i) => {
        
    //   })
    //   console.log('kk:', kk);

    //   // Return updated academiaEntry
    //   return entry;
    // })
    // console.log('test:', test);

    return barArray;
  }

  render() {
    const test = this.getDateRange(pastData.academia);
    return(
      <div>
        {pastData.academia.map((academiaEntry, i) => {
          return <AcademiaEntry data={academiaEntry} key={i}/>
        })}
        <div className='academiaBars'>
          {test.map((barData,i) => {
            return <MultipleAcademiaBars barData={barData} barFormat={this.props.barFormat} key={i} />
          })}
        </div>
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
        <DesktopChronology barFormat={{barWidth: 8, barSpacing: 8}} />
      </div>
    )
  }
}

module.exports = Past;