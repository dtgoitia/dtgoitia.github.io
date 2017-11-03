import React from 'react';

const SocialEntry = props => {
  return(
    <div>
      <a href={props.url}>
        <i className={'fa fa-' + props.socialMedia + ' fa-4x'}></i>
      </a>
    </div>
  );
};

module.exports = SocialEntry;