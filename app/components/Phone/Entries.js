import React from 'react';
import Entry from './Entry';

const Entries = props => {
  return(
    <div className='tab'>
      {props.db.map((entry, i) => {
        return <Entry head={entry[0]} sub={entry[1]}  key={i} />;
      })}
    </div>
  );
};

module.exports = Entries;