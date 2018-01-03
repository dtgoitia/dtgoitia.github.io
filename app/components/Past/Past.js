import React from 'react';
import NavBar from './../NavBar/NavBar';
import Timeline from './Timeline';
import NutshellEntry from './NutshellEntry';

const pastEntry = require('./../../../utils/pastEntry.js');

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
        <div className='nutshellContainer'>
          <div className='nutshellTitle'>In a Nutshell</div>
          <div className='nutshellEntryContainer'>
            {this.props.originalDb.nutshell.map((content, i) => {
              return <NutshellEntry content={content} key={i}/>;
            })}
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Past;
