import React from 'react';

const ArrowOpen = () => {
  const dString = 'm 20 10 l20 20 l-20 20';
  return(
    <svg className='arrowOpen' viewBox={'0 0 60 60'}>
      <path d={dString} fill='none' strokeWidth='10'/>
    </svg>
  );
};

module.exports = ArrowOpen;