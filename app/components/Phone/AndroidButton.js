import React from 'react';

const AndroidButton = props => {
  return (
    <a className='androidButton' href={'mailto:' + props.email}>
      <i className="fa fa-envelope"></i>
    </a>
  );
};

module.exports = AndroidButton;