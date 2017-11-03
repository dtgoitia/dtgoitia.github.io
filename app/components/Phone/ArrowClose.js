import React from 'react';

const ArrowClose = () => {
  const dString = 'm 10 20 l20 20 l20 -20';
  return(
    <svg className='arrowClose' viewBox={'0 0 60 60'}>
      <path d={dString} fill='none' strokeWidth='10'/>
    </svg>
  );
};

module.exports = ArrowClose;