import React from 'react';
import NavBar from './NavBar';
import pastData from './../../pastData.json';
import pastEntryUtils from './../../utils/pastEntry.js'

const pastEntry = require ('./../../utils/pastEntry.js');
const originalDb = require('./../../pastData.json');

// // Individual horizontal bars
// class AcademiaBar extends React.Component {
//   render() {
//     const l = this.props.length - 10; // Total length - (round corners' X displacement)
//     const dString = 'm 5 0 h '+ l +' a 5 5 0 0 1 0 10 h -'+ l +' a 5 5 0 0 1 0 -10';
//     return (
//       <svg
//         className='academiaBar'
//         viewBox={'0 0 '+ this.props.length +' 10'}
//         width={this.props.length}
//         height='10'
//       >
//         <path
//           d={dString}
//           fill={this.props.fill ? this.props.fill : 'fill'}
//           stroke={this.props.stroke ? this.props.stroke : 'black'}
//         />
//       </svg>
//     );
//   }
// }

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
    return(
      <div className='academiaBars'>
        {this.props.barData.map((barData,i) => {
          return <MultipleAcademiaBars barData={barData} barFormat={this.props.barFormat} key={i} />
        })}
      </div>
    )
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

// This is what you need to get from the initial bar
const test = [
  [ { 'l': 200, 'color': "#fa70ae" }, { 'l': 200, 'color': "#fff" }, { 'l': 80, 'color': "#999" } ],
  [ { 'l': 80, 'color': "#aaa" } ],
  [ { 'l': 60, 'color': "#aaa" } ],
  [ { 'l': 100, 'color': "#aaa" } ]
];

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
        <DesktopChronology barFormat={{barWidth: 8, barSpacing: 8}} barData={test} />
      </div>
    )
  }
}

module.exports = Past;