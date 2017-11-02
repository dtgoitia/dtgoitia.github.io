import React from 'react';
import PresentSubEntry from './PresentSubEntry';

const PresentEntry = props => {
  return(
    <div className='presentEntryContainer'>
      <div className='presentTitle'>{props.title}</div>
      <div className='presentSubEntryContainer'>
        {
          props.entryArray.map((subEntry, i) => {
            return <PresentSubEntry subEntry={subEntry} key={i} color={props.color}/>;
          })
        }
      </div>
    </div>
  );
};

module.exports = PresentEntry;