import React from 'react';
import NavBar from './../NavBar/NavBar';
import PresentEntry from './PresentEntry';

class Present extends React.Component {
  render () {
    return (
      <div>
        <NavBar
          left={{label:'MY PAST',target:'past'}}
          right={{label:'YOUR FUTURE',target:'future'}}
        />
        <div className='present'>
          <PresentEntry title='PORTFOLIO' entryArray={this.props.originalDb.portfolio} color={'white'}/>
          <PresentEntry title='SKILLS'    entryArray={this.props.originalDb.skills}     color={'white'}/>
          <PresentEntry title='INTERESTS' entryArray={this.props.originalDb.interests} color={'white'}/>
        </div>
      </div>
    );
  }
}

module.exports = Present;