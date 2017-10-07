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

// // Block containing all horizontal bars
// const AcademiaBars = (props) => {
//   return(
//     <div className='academiaBars'>
//       {props.data.bars.map((item,i) => {
//         return <AcademiaBar length={item} fill={props.data.color} stroke='black' key={i}/>
//       })}
//     </div>
//   );
// }

// // Tag with a circle shape: when the user clicks on the tag,
// // it will show a card with the information
// class AcademiaTag extends React.Component {
//   constructor(props){
//     super(props)
//     this.state = { foldedTray: true }
//     this.showHideTray = this.showHideTray.bind(this);
//   }

//   showHideTray(){
//     this.setState({foldedTray: !this.state.foldedTray})
//   }

//   componendidmoun
//   render() {
//     return (
//       <div
//         className='academiaTagContainer'
//         style={{top: this.props.data.y, left: this.props.data.x}}
//       >
//         <div
//           className={this.state.foldedTray === true ? 'academiaTagClosed' : 'academiaTagClosed academiaTagOpen'}
//           style={ {backgroundColor: this.props.data.color} }
//           onClick={this.showHideTray.bind(null)}
//         >
//           <img src={'./../img/' + this.props.data.img} />
//           <h1>{this.props.data.title}</h1>
//           <h2>{this.props.data.subtitle}</h2>
//           <div
//             className='academiaTagTray'
//             style={{display: 'block'}}
//           >
//             <h3>{this.props.data.description}</h3>
//             <p><i>Start date: </i>{this.props.data.start}</p>
//             <p><i>End date: </i>{this.props.data.end === '' ? 'not yet' : this.props.data.end}</p>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// // Block containing the entry tag and its horizontal bars
// class AcademiaEntry extends React.Component {
//   render() {
//     const d = this.props.data;
//     return (
//       <div className='academiaEntry'>
//         <AcademiaTag data={d} />
//         <AcademiaBars data={d} />
//       </div>
//     );
//   }
// }

class DesktopChronology extends React.Component {
  render() {
    const barFormat = this.props.barFormat;
    
    const yearHeight =
      6 * (barFormat.barThickness + barFormat.barSpacing)
      - barFormat.yearSpacing;
    
    const dbRange = this.props.dbRange;
    const yearArray = pastEntry.getYearsArray(
      dbRange.latest.getFullYear(),
      pastEntry.yearRange(dbRange.earliest, dbRange.latest)
    );

    /**
     * TO-DO: adjust 'year' bands position according to dbRange
     */
    

    return(
      <div className='timelineContainer'>
        <div className='years'>
          {
            yearArray.map( year => {
              return (
                <div
                  className='year'
                  key={year}
                  style={{
                    height: yearHeight + 'px',
                    margin: barFormat.yearSpacing + 'px 0px '
                  }}
                >
                  <div className='yearTag'>{year}</div>
                </div> 
              );
            })
          }
        </div>
        <div className='timeline'>
          <div className='experience'>
            Experience bars TO-DO
          </div>
          <div className='academia'>
            <div className='academiaBars'>
              {Object.values(this.props.academiaBars).reverse().map((barData,i) => {
                return <MultipleAcademiaBars barData={barData} barFormat={barFormat} key={i} />;
              })}
            </div>
          </div>
        </div>
      </div>
    );
    // DON'T DELETE UNTIL TAG IS IMPLEMENTED AS WELL
    // return(
    //   <div>
    //     {pastData.academia.map((academiaEntry, i) => {
    //       return <AcademiaEntry data={academiaEntry} key={i}/>
    //     })}
    //     <div className='academiaBars'>
    //       {test.map((barData,i) => {
    //         return <MultipleAcademiaBars barData={barData} barFormat={this.props.barFormat} key={i} />
    //       })}
    //     </div>
    //   </div>
    // )
  }
}

class Past extends React.Component {
  render () {
    // Convert to Date all string-dates in db
    const db = pastEntry.importDb(originalDb);

    // Get db range
    const dbRange = pastEntry.getDbRange(db);
    
    // Get database bar list sorted and grouped by index
    let dbBars = pastEntry.getDbBars(db);

    return (
      <div>
        <NavBar
          left={{label:'YOUR FUTURE',target:'future'}}
          right={{label:'MY PRESENT',target:'present'}}
          changePage={this.props.changePage}
        />
        <DesktopChronology
          barFormat={{barThickness: 8, barSpacing: 8, yearSpacing: 2}}
          academiaBars={dbBars.academia}
          dbRange={dbRange}
        />
      </div>
    );
  }
}

module.exports = Past;
