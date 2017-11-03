import React from 'react';

const Entry = props => {
  return(
    <div className='tabEntry'>
      <div className='entryHead'>{props.head}</div>
      <div className='entrySub'>{props.sub}</div>
    </div>
  );
};

module.exports = Entry;