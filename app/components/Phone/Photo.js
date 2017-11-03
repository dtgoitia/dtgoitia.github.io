import React from 'react';

const Photo = props => {
  return(
    <div className='photo'>
      <img src={require('./../../img/' + props.url)} />
    </div>
  );
};

module.exports = Photo;